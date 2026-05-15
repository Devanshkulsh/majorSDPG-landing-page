import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_URL = "https://majorsdspgamc.com";
const SITE_NAME = "Major S.D. Singh P.G. Ayurvedic Medical College & Hospital";
const DEFAULT_TITLE = "MSDSPG | Major S.D. Singh P.G. Ayurvedic Medical College Admissions";
const DEFAULT_DESCRIPTION =
  "Apply for BAMS and PG Ayurveda programs at Major S.D. Singh P.G. Ayurvedic Medical College & Hospital. NCISM approved college with strong clinical exposure and experienced faculty.";
const OG_IMAGE = `${SITE_URL}/thumnail.webp`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "Major S.D. Singh P.G. Ayurvedic Medical College Team" },
      {
        name: "keywords",
        content:
          "BAMS admission, Ayurveda college admission, MSDSPG college, Major SD Singh PG Ayurvedic Medical College, NCISM approved BAMS, Ayurveda PG courses",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Major SD Singh PG Ayurvedic Medical College campus" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: SITE_URL,
      },
      {
        rel: "icon",
        type: "image/webp",
        href: "/logo.webp",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/webp",
        href: "/logo.webp",
        sizes: "16x16",
      },
      {
        rel: "apple-touch-icon",
        href: "/logo.webp",
        sizes: "180x180",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.webp`,
              image: OG_IMAGE,
              sameAs: [SITE_URL],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <script
          type="module"
          src="https://ntechzy.in/api/v1/student-form/form.js"
          {...({
            path: '["/", "/dynamicForm/index.html","/"]',
            divid: "formsID7375",
            courses:
              '["Select Course", "MBBS", "BDS", "BAMS", "BHMS", "BUMS", "BNYS", "BSc. Nursing", "Veterinary"]',
            styles: "classic",
            logo: "/logo.webp",
            contact: "8189098662",
          } as Record<string, string>)}
        ></script>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
