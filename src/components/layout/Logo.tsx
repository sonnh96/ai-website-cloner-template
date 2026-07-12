export function Logo({ className }: { className?: string }) {
  return (
    <span className={`font-sans text-2xl font-black tracking-tight ${className ?? ""}`}>
      CIS
      <span className="text-kd-secondary">.</span>
    </span>
  );
}
