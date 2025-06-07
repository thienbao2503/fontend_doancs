import React from "react";
import EmployeeCard from "./EmployeeCard";

interface Contact {
  id: number;
  user_email: string,
  username: string,
  role_id: number,
  role_name: string;
}

interface EmployeeListProps {
  contacts: Contact[];
  view: string;
}

export default function EmployeeList({ contacts, view }: EmployeeListProps) {
  return (
    <main className={`w-full overflow-y-auto gap-6 ${view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col space-y-4"}`}>
      {contacts?.map((contact) => (
        <EmployeeCard key={contact.id} contact={contact} view={view} />
      ))}
    </main>
  );
}