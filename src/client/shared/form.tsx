import React from "react";

export function Form({
  children,
  handleSubmit,
}: {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {children}
      </form>
    </div>
  );
}
