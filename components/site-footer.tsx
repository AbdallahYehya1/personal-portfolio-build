export function SiteFooter() {
  return <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      <p className="text-sm text-slate-600">© {new Date().getFullYear()} Abdallah Yehya. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="mailto:abdallah.yehya02@gmail.com">Email</a>
        <a href="https://linkedin.com/in/abdallah-yehya" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/AbdallahYehya1" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </footer>
}
