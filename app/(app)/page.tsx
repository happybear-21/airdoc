import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-[calc(100vh-4rem)] py-12">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">Welcome to</span>
            <span className="block text-primary mt-2">AirDoc</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            A modern documentation template built with Next.js and Fumadocs.
            Create beautiful documentation sites with ease.
          </p>

          <div className="space-y-4 mb-12">
            <div>
              <h3 className="text-xl mb-2">Modern Stack</h3>
              <p className="text-muted-foreground">
                Built with Next.js, TypeScript, and Tailwind CSS for the best developer experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2">MDX Support</h3>
              <p className="text-muted-foreground">
                Write documentation in MDX with full support for React components and syntax highlighting.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="/docs">
                Get Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/usage">
                View Examples
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 