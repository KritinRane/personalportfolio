"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body = `${message}\n\n— ${name || "Anonymous"}${
      email ? ` (${email})` : ""
    }`;
    const mailSubject = subject || `Portfolio message from ${name || "a visitor"}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 overflow-hidden rounded-2xl border border-neutral-800"
    >
      <div className="grid grid-cols-1 border-b border-neutral-800 sm:grid-cols-2">
        <div className="border-b border-neutral-800 p-5 sm:border-b-0 sm:border-r">
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-[0.2em] text-neutral-500"
          >
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none"
          />
        </div>
        <div className="p-5">
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.2em] text-neutral-500"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none"
          />
        </div>
      </div>

      <div className="border-b border-neutral-800 p-5">
        <label
          htmlFor="subject"
          className="block text-xs uppercase tracking-[0.2em] text-neutral-500"
        >
          Subject
        </label>
        <input
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?"
          className="mt-2 w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none"
        />
      </div>

      <div className="border-b border-neutral-800 p-5">
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.2em] text-neutral-500"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          rows={5}
          className="mt-2 w-full resize-none bg-transparent text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-neutral-500">
          Sends directly to {profile.email}
        </p>
        <button
          type="submit"
          className="rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:border-neutral-500"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
