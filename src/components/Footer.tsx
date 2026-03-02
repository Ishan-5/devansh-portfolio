export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tighter">
            Devansh Kumar Pandey<span className="text-primary">.</span>
          </div>
          
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Devansh Kumar Pandey. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/Ishan-5" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors text-sm font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/devansh584" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors text-sm font-medium">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
