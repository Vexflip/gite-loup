interface AmenityBadgeProps {
  icon: string;
  label: string;
}

export default function AmenityBadge({ icon, label }: AmenityBadgeProps) {
  return (
    <div className="amenity-badge">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
