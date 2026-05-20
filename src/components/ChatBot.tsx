import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToLeadForm } from "@/lib/utils";

type Step = {
  question: string;
  options: string[];
};

type ChatMessage = {
  type: "bot" | "user";
  text: string;
};

const steps: Step[] = [
  {
    question: "Hi, what program are you interested in?",
    options: ["BAMS", "MS Prasuti Tantra", "MS Shalya Tantra", "Not sure, guide me"],
  },
  {
    question: "Great. What would you like to know?",
    options: ["Eligibility", "Fees", "Hostel", "Admissions process"],
  },
  {
    question: "Perfect. What would you like to do next?",
    options: ["Apply now", "Talk to counselor"],
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [chat, setChat] = useState<ChatMessage[]>([{ type: "bot", text: steps[0].question }]);
  const [typing, setTyping] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let showTimer: number | undefined;
    let hideTimer: number | undefined;

    const loop = () => {
      showTimer = window.setTimeout(() => {
        setShowPrompt(true);
        hideTimer = window.setTimeout(() => {
          setShowPrompt(false);
          loop();
        }, 2500);
      }, 4000);
    };

    loop();
    return () => {
      if (showTimer) window.clearTimeout(showTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  const handleClick = (option: string) => {
    setChat((prev) => [...prev, { type: "user", text: option }]);

    if (option === "Apply now") {
      scrollToLeadForm();
    }

    setTyping(true);

    window.setTimeout(() => {
      setTyping(false);
      if (step + 1 < steps.length) {
        setChat((prev) => [...prev, { type: "bot", text: steps[step + 1].question }]);
        setStep((prev) => prev + 1);
      } else {
        setChat((prev) => [
          ...prev,
          { type: "bot", text: "Our admissions team is ready. Choose call or WhatsApp below." },
        ]);
        setStep((prev) => prev + 1);
      }
    }, 750);
  };

  const whatsappLink = () => {
    const msg = chat.map((c) => `${c.type === "user" ? "User" : "Bot"}: ${c.text}`).join("\n");
    return `https://wa.me/918189098662?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {showPrompt && !open && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="max-w-[70vw] rounded-xl border border-gold/25 bg-cream px-3 py-2 text-xs text-charcoal shadow-lg"
            >
              Ask admissions
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setOpen((prev) => !prev);
            setShowPrompt(false);
          }}
          aria-label="Open admissions assistant"
          className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-gold to-gold-dark text-white shadow-xl transition hover:scale-105"
        >
          <img
            src="/robot.gif"
            alt="Admissions Assistant"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/50"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="fixed inset-x-3 bottom-3 z-50 flex h-[78dvh] max-h-160 w-auto max-w-[calc(100vw-1.5rem)] flex-col overflow-x-hidden overflow-y-hidden rounded-2xl border border-gold/20 bg-cream shadow-2xl sm:right-6 sm:bottom-24 sm:left-auto sm:top-auto sm:h-125 sm:w-85 sm:max-w-[92vw] sm:translate-y-0"
          >
            <div className="flex items-center justify-between bg-linear-to-r from-gold to-gold-dark px-4 py-3 font-semibold text-charcoal">
              <span>Admissions Assistant</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
                className="rounded-md px-2 py-1 text-base hover:bg-charcoal/10"
              >
                X
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-white/60 p-3 sm:p-4">
              {chat.map((msg, i) => (
                <motion.div
                  key={`${msg.type}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm sm:max-w-[82%] ${
                    msg.type === "bot"
                      ? "bg-white text-charcoal shadow-sm"
                      : "ml-auto bg-gold text-charcoal"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {typing && <div className="text-sm text-charcoal/60">Typing...</div>}
              <div ref={chatEndRef} />
            </div>

            {step < steps.length && !typing && (
              <div className="flex flex-wrap gap-2 border-t border-gold/20 bg-cream p-3">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleClick(opt)}
                    className="max-w-full whitespace-normal rounded-full bg-gold/10 px-3 py-2.5 text-xs text-gold-dark transition hover:bg-gold hover:text-charcoal"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {step >= steps.length && (
              <div className="grid grid-cols-2 gap-2 border-t border-gold/20 bg-cream p-3">
                <a
                  href="tel:+918189098662"
                  className="rounded-full bg-gold py-2.5 text-center text-sm font-semibold text-charcoal transition hover:brightness-95"
                >
                  Call
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-green py-2.5 text-center text-sm font-semibold text-white transition hover:brightness-95"
                >
                  WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
