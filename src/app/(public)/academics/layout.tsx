export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">
      <main className="min-h-screen py-8 md:py-12">
        {children}
      </main>
    </div>
  )
} 