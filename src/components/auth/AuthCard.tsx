// src/components/auth/AuthCard.tsx
interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl shadow-lg p-8 border">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  );
}
