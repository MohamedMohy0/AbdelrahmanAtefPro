import { ArrowUpRight, Bot, BrainCircuit, Code2, Cpu, DatabaseZap, Github, Layers3, Mail, MapPin, Phone, Rocket, Send, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
const projectGroups = [
  {
    label: "AI Projects",
    icon: BrainCircuit,
    summary: "LLMs, RAG, machine learning, classification, and intelligent assistants.",
    projects: [
      { name: "MedVision AI — Cancer Detection System", stack: "Python · Tensorflow · YOLO", description: "A desktop AI-powered medical image analysis application for detecting Brain Tumors, Breast Cancer, and Skin Cancer using Deep Learning. ", url: "https://github.com/AbdoAtef2000/Medical-Image-Classification-using-Deep-Learning-Computer-Vision" },
      { name: "Math Solver AI Bot", stack: "Streamlit · LangChain · RAG", description: "Custom knowledge-base chatbot that gives real-time step-by-step math solutions through a simple interface.",url: "https://github.com/AbdoAtef2000/Chat_Math" },
     
    ],
  },
  {
    label: "Tools & Automation",
    icon: DatabaseZap,
    summary: "Python utilities, reporting systems, data workflows, and n8n-style automation.",
    projects: [
      { name: "Report Automation", stack: "Python · Power BI · Data", description: "Automated data cleaning, insight generation, and report creation for business decision-making." },
      { name: "n8n Workflow Builds", stack: "n8n · APIs · AI", description: "Connected form triggers, APIs, AI classifiers, email notifications, and generated outputs into one workflow." },
    ],
  },
];

const skills = ["Python", "Machine Learning", "n8n Automation", "RAG", "Power BI", "TensorFlow", "PyTorch", "Data Analysis", "GitHub"];

const timeline = [
     { role: "MedVision AI Cancer Detection System", place: "A desktop AI-powered medical image analysis application for detecting Brain Tumors, Breast Cancer, and Skin Cancer using Deep Learning. ", date: "Juanary 2026" },
  { role: "Chat_Math", place: "A RAG Chat to solve Mathmatics questions with a simple stramlit interface using Llama 3.2 3B ", date: "May 2025" },
];

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "AI engineering",
    subtitle: "Models that understand context",
    points: ["RAG pipelines", "Prompt engineering", "Classification systems", "TensorFlow / PyTorch"],
  },
  {
    icon: Workflow,
    title: "Automation systems",
    subtitle: "n8n-style workflows for operations",
    points: ["Lead capture", "Report generation", "API workflows", "Data cleaning"],
  },
];

const automationFlow = ["Trigger", "Collect data", "AI classify", "Generate report", "Notify team"];

const engineRoom = [
  { icon: Cpu, title: "Think", text: "Turn messy ideas into a clear technical plan: data, model, interface, automation, and deployment path." },
  { icon: Layers3, title: "Build", text: "Create React/Vite experiences, AI workflows, dashboards, bots, and backend-connected product prototypes." },
  { icon: Send, title: "Ship", text: "Polish the product, test the flow, make it fast on mobile, and prepare it for real people to use." },
];

const stackRows = [
  ["Python", "FastAPI", "LangChain", "RAG", "TensorFlow"],
  ["n8n", "APIs", "Reports", "Power BI", "Automation"],
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-hero-gradient text-foreground">
      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--line)/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--line)/0.12)_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:54px_54px] animate-grid-pulse" />
      
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6">
        {/* Navbar */}
        <nav className="z-10 flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4 sm:pb-5">
          <a href="#top" className="font-display text-xl sm:text-2xl font-bold tracking-normal text-primary">AA<span className="text-secondary">.AI</span></a>
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex items-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <a className="transition-colors hover:text-primary" href="#projects">Projects</a>
              <a className="transition-colors hover:text-primary" href="#skills">Skills</a>
              <a className="transition-colors hover:text-primary" href="#contact">Contact</a>
            </div>
            <Button asChild variant="circuit" size="sm" className="text-xs sm:text-sm">
              <a href="https://github.com/AbdoAtef2000" target="_blank" rel="noreferrer"><Github className="mr-1.5 sm:mr-2 size-3.5 sm:size-4" /> GitHub</a>
            </Button>
          </div>
        </nav>

        {/* Hero Section - تحسين كامل للهواتف */}
        <div id="top" className="flex flex-col items-center justify-center gap-8 sm:gap-10 py-8 sm:py-12 md:py-14 lg:py-20">
          {/* الجانب الأيسر - النصوص */}
          <div className="w-full space-y-5 sm:space-y-6 md:space-y-8 text-center">
            <div className="inline-flex mx-auto animate-fade-in items-center gap-2 border border-line/35 bg-surface/60 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-primary shadow-neon backdrop-blur">
              <Sparkles className="size-3.5 sm:size-4" /> AI Engineer  · Automation
            </div>
            <div className="animate-fade-in space-y-4 sm:space-y-5 [animation-delay:120ms]">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-normal text-foreground">
                Abdelrahman Atef.
              </h1>
              
              {/* Glitched titles */}
              <div className="glitch-wrap font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                <span className="title-slot block w-full">
                  {["Machine Learning","Deep Learning","Computer Vision","NLP Systems","RAG Pipelines","Statistical Models","Data Analytics"].map((t, i, arr) => (
                    <span
                      key={t}
                      className="glitch inline-block"
                      data-text={t}
                      style={{ animationDelay: `${(i * 8) / arr.length}s` }}
                    >
                      {t}
                    </span>
                  ))}
                  <span className="invisible hidden">Automation Eng.</span>
                </span>
              </div>
              
              <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 text-muted-foreground px-2 sm:px-0">
                AI Engineer focused on machine learning, RAG applications, and automation workflows that turn data into useful products.
              </p>
            </div>
            
            {/* أزرار متجاوبة */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in [animation-delay:220ms] justify-center">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href="#projects">View projects <ArrowUpRight className="ml-2 size-4" /></a>
              </Button>
              <Button asChild variant="circuit" size="lg" className="w-full sm:w-auto">
                <a href="mailto:mohmmadmohy52@gmail.com">Hire me <Mail className="ml-2 size-4" /></a>
              </Button>
              <Button asChild variant="circuit" size="lg" className="w-full sm:w-auto">
                <a href="/AbdelrahmanAtef.pdf" target="_blank" rel="noreferrer">Open CV <Sparkles className="ml-2 size-4" /></a>
              </Button>
            </div>
          </div>

          {/* Right Column: Code Window - يظهر تحت النصوص على الهاتف */}
          <div className="w-full max-w-full mt-6 lg:mt-0">
            <div className="absolute -inset-2 bg-primary-gradient opacity-10 blur-3xl hidden lg:block"></div>
            <div className="glitch-wrap relative w-full animate-scale-in overflow-hidden border border-line/30 bg-card-gradient p-3 sm:p-4 shadow-card backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-primary-gradient animate-scan-line"></div>
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                  <span className="size-2 rounded-full bg-secondary"></span>
                  <span className="size-2 rounded-full bg-primary"></span>
                </div>
                <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] text-muted-foreground truncate max-w-[120px] sm:max-w-none">~/mohamed.mohy/system.live</p>
              </div>
              
              {/* شبكة 2x2 متجاوبة - تتحول إلى 2x2 على الهاتف وتبقى كذلك */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-2.5">
                <div style={{ animationDelay: "0s" }} className="hover-lift group relative overflow-hidden border border-border/80 bg-surface/70 p-2 sm:p-3 float-y">
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-between">
                    <BrainCircuit className="size-4 sm:size-5 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    <span className="border border-line/30 bg-background/50 px-1 py-0.5 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-secondary whitespace-nowrap">RAG · LLMs</span>
                  </div>
                  <p className="text-sm sm:text-base font-black text-foreground">AI Models</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] leading-tight sm:leading-4 text-muted-foreground">Chatbots & classifiers.</p>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gradient opacity-60 transition-opacity duration-300 group-hover:opacity-100"></span>
                </div>

                <div className="hover-lift group relative overflow-hidden border border-border/80 bg-surface/70 p-2 sm:p-3 float-y" style={{ animationDelay: "0.4s" }}>
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-between">
                    <Workflow className="size-4 sm:size-5 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    <span className="border border-line/30 bg-background/50 px-1 py-0.5 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-secondary whitespace-nowrap">n8n · APIs</span>
                  </div>
                  <p className="text-sm sm:text-base font-black text-foreground">Automation</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] leading-tight sm:leading-4 text-muted-foreground">Workflows & APIs.</p>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gradient opacity-60 transition-opacity duration-300 group-hover:opacity-100"></span>
                </div>

                <div className="hover-lift group relative overflow-hidden border border-border/80 bg-surface/70 p-2 sm:p-3 float-y" style={{ animationDelay: "1.2s" }}>
                  <div className="mb-1.5 sm:mb-2 flex items-center justify-between">
                    <DatabaseZap className="size-4 sm:size-5 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                    <span className="border border-line/30 bg-background/50 px-1 py-0.5 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-secondary whitespace-nowrap">Python · BI</span>
                  </div>
                  <p className="text-sm sm:text-base font-black text-foreground">Data + BI</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] leading-tight sm:leading-4 text-muted-foreground">Insights & Dashboards.</p>
                  <span className="absolute bottom-0 left-0 h-px w-full bg-primary-gradient opacity-60 transition-opacity duration-300 group-hover:opacity-100"></span>
                </div>
              </div>

              {/* Terminal section */}
              <div className="mt-3 space-y-1.5 border border-line/35 bg-background/55 p-2 sm:p-3 font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-5 text-terminal overflow-x-auto">
                <p><span className="text-primary">$</span> status --all</p>
                <p className="text-muted-foreground flex flex-wrap gap-x-3">› ai_pipeline ............ <span className="text-terminal">online</span></p>
                <p className="text-muted-foreground flex flex-wrap gap-x-3">› automation ............ <span className="text-secondary">running</span></p>
                <p className="flex items-center gap-1 text-foreground flex-wrap">› ready for new project<span className="ml-1 inline-block h-2 w-1.5 animate-pulse bg-primary"></span></p>
              </div>

              {/* Ticker */}
              <div className="mt-2.5 overflow-hidden border border-border/60 bg-background/40">
                <div className="ticker-track flex whitespace-nowrap py-1.5 font-mono text-[9px] sm:text-[10px] text-muted-foreground">
                  <span className="flex shrink-0 gap-3 sm:gap-5 px-3">
                    <span>● Python</span><span>● LangChain</span><span>● RAG</span><span>● n8n</span><span>● Power BI</span><span>● TensorFlow</span>
                  </span>
                  <span className="flex shrink-0 gap-3 sm:gap-5 px-3">
                    <span>● Python</span><span>● LangChain</span><span>● RAG</span><span>● n8n</span><span>● Power BI</span><span>● TensorFlow</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative border-y border-border/60 bg-background/78 px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 backdrop-blur">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <p className="mb-2 text-sm font-bold uppercase text-secondary">Selected work</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Projects split by specialty</h2>
            </div>
            <p className="max-w-xl text-center md:text-right text-muted-foreground text-sm sm:text-base">A clearer portfolio map: AI products and practical tools or automation systems.</p>
          </div>
          <div className="space-y-8 sm:space-y-10">
            {projectGroups.map((group) => (
              <div key={group.label} className="relative overflow-hidden border border-border bg-surface/35 p-3 sm:p-4 md:p-6 shadow-card">
                <div className="absolute inset-x-0 top-0 h-px bg-primary-gradient animate-scan-line" />
                <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 sm:size-12 items-center justify-center border border-line bg-background/45 text-primary"><group.icon className="size-5 sm:size-6" /></div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-foreground">{group.label}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{group.summary}</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2">
                  {group.projects.map((project) => {
                    const Card = project.url ? "a" : "div";
                    return (
                      <Card key={project.name} href={project.url} target={project.url ? "_blank" : undefined} rel={project.url ? "noreferrer" : undefined} className="hover-lift group border border-border bg-card-gradient p-4 sm:p-5 shadow-card block">
                        <div className="mb-3 sm:mb-5 flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-bold text-foreground break-words">{project.name}</h4>
                            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-primary break-words">{project.stack}</p>
                          </div>
                          {project.url && <ArrowUpRight className="size-4 sm:size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />}
                        </div>
                        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">{project.description}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* باقي الأقسام */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <p className="mb-2 text-sm font-bold uppercase text-secondary">What I can build</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Two engines: AI, automation.</h2>
          </div>
          <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <article key={area.title} className="hover-lift group relative overflow-hidden border border-border bg-card-gradient p-5 sm:p-6 shadow-card animate-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-primary-gradient opacity-80" />
                <area.icon className="mb-4 sm:mb-6 size-8 sm:size-10 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-black">{area.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-muted-foreground text-sm sm:text-base">{area.subtitle}</p>
                <div className="mt-4 sm:mt-6 grid gap-2">
                  {area.points.map((point) => <span key={point} className="border border-border/70 bg-background/35 px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">{point}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-border/60 bg-surface/55 px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="mb-2 text-sm font-bold uppercase text-secondary">Automation lab</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Workflows that save time.</h2>
            <p className="mt-4 sm:mt-5 leading-relaxed sm:leading-8 text-muted-foreground text-sm sm:text-base">I can connect forms, APIs, spreadsheets, AI classifiers, email, notifications, and reports into reliable n8n-style automation systems.</p>
          </div>
          <div className="relative overflow-hidden border border-line/35 bg-card-gradient p-4 sm:p-5 shadow-card">
            <div className="absolute inset-x-0 top-0 h-px bg-primary-gradient animate-scan-line" />
            <div className="space-y-2.5 sm:space-y-3">
              {automationFlow.map((step, index) => (
                <div key={step} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 border border-border/70 bg-background/45 p-3 sm:p-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center border border-line bg-surface text-primary text-sm sm:text-base">{index + 1}</div>
                  <div className="flex-1 w-full">
                    <p className="font-bold text-foreground text-sm sm:text-base">{step}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{index === 2 ? "LLM / rules choose the next action" : "Connected into one repeatable process"}</p>
                  </div>
                  {index < automationFlow.length - 1 && <Rocket className="size-4 sm:size-5 text-secondary shrink-0 self-end sm:self-center mt-1 sm:mt-0" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <section id="skills" className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="text-center lg:text-left">
            <p className="mb-2 text-sm font-bold uppercase text-secondary">Capability map</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">From model to interface.</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {skills.map((skill) => <span key={skill} className="hover-lift border border-line/25 bg-surface/60 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-foreground">{skill}</span>)}
            </div>
            <div className="space-y-2.5 sm:space-y-3">
                          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Top Projects</h3>

              {timeline.map((item) => (
                <div key={item.role + item.place} className="hover-lift grid gap-1.5 sm:gap-2 border-l-2 border-line bg-surface/45 p-4 sm:p-5 sm:grid-cols-[1fr_auto]">
                  <div><h3 className="font-bold text-foreground text-sm sm:text-base">{item.role}</h3><p className="text-xs sm:text-sm text-muted-foreground">{item.place}</p></div>
                  <p className="text-xs sm:text-sm text-secondary">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative border-t border-border bg-surface/70 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-black">Let's build an intelligent product.</h2>
            <p className="mt-1.5 sm:mt-2 flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm sm:text-base"><MapPin className="size-3.5 sm:size-4" /> Imbaba, Giza</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <Button asChild variant="circuit" size="default" className="text-xs sm:text-sm"><a href="tel:+201100229726"><Phone className="mr-1.5 sm:mr-2 size-3.5 sm:size-4" /> Call</a></Button>
            <Button asChild variant="circuit" size="default" className="text-xs sm:text-sm"><a href="https://wa.me/201100229726" target="_blank" rel="noreferrer"><FaWhatsapp className="mr-1.5 sm:mr-2 size-3.5 sm:size-4" /> Whatsapp</a></Button>
            <Button asChild variant="hero" size="default" className="text-xs sm:text-sm"><a href="mailto:abdoatefe2002@gmail.com"><Mail className="mr-1.5 sm:mr-2 size-3.5 sm:size-4" /> Email</a></Button>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;