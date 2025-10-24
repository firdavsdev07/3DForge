"use client";

import { Upload, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // TODO: Replace with actual authentication logic
  const isAuthenticated = false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-secondary">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="3DForge Logo"
            width={24}
            height={24}
            className="text-foreground"
          />
          <span className="text-xl font-bold text-foreground">3DForge</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/upload"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Upload className="h-5 w-5 text-foreground" />
          </Link>
          {isAuthenticated ? (
            <button className="flex items-center gap-2 p-2 rounded-full hover:bg-secondary transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Profile</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium bg-accent text-background rounded-md hover:bg-accent/90 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
