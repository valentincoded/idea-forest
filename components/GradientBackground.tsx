export default function GradientBackground() {
  return (
    <div className="cloud-background fixed inset-0 -z-10" aria-hidden="true">
      <div className="cloud-background__wash" />
      <div className="cloud-background__drift cloud-background__drift--one" />
      <div className="cloud-background__drift cloud-background__drift--two" />
    </div>
  )
}
