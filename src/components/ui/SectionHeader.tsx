interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  id?: string;
}

export function SectionHeader({ index, label, title, id }: SectionHeaderProps) {
  return (
    <header className="section-header" id={id}>
      <div className="section-header-top">
        <span className="section-index">{index}</span>
        <span className="section-label">{label}</span>
      </div>
      <h2 className="section-heading">{title}</h2>
      <div className="section-rule" />
    </header>
  );
}
