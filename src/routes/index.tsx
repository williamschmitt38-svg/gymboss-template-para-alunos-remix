import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Dumbbell, Users, CheckCircle, Crown, DollarSign, Calendar, Brain, BarChart, UserCog, Settings,
  AlertCircle, Star, Check, ArrowRight, Sparkles, MessageCircle, Smartphone, Zap, Building2, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({ meta: [
    { title: "GymBoss AI — Gestão para academias" },
    { name: "description", content: "Organize sua academia. Gestão completa, check-in, financeiro, agenda e sugestões para acompanhar alunos — tudo numa só plataforma fitness." },
    { property: "og:title", content: "GymBoss AI — IA pra academias" },
    { property: "og:description", content: "Organize sua academia. Reative com inteligência." },
  ]}),
});

const modulos = [
  { icon: Users,        title: "Alunos",       desc: "Cadastro, plano e dados de contato do aluno." },
  { icon: CheckCircle,  title: "Check-ins",    desc: "Registro manual com busca por nome ou CPF." },
  { icon: Crown,        title: "Planos",       desc: "Mensal, trimestral, anual ou sem fidelidade. Você define." },
  { icon: DollarSign,   title: "Financeiro",   desc: "Receitas, despesas e pagamentos registrados manualmente." },
  { icon: Calendar,     title: "Agenda Aulas", desc: "Grade semanal por modalidade, horário e profissional." },
  { icon: Brain,        title: "AI Growth",    desc: "Sinaliza inatividade e prepara sugestões por regras." },
  { icon: BarChart,     title: "Relatórios",   desc: "Receitas, despesas, cadastros e frequência registrada." },
  { icon: UserCog,      title: "Equipe",       desc: "Profissionais e colaboradores com acesso por email verificado." },
  { icon: Settings,     title: "Configurações",desc: "Nome, marca e dados da sua academia." },
];

const pains = [
  "Alunos somem e você nem percebe — só descobre quando não paga",
  "Inadimplência gerenciada em planilha (e quase ninguém cobra)",
  "Check-in com caderno — sem dados reais de frequência",
  "Sem visão de MRR, churn, ticket médio: você decide no escuro",
  "Equipe sem plataforma própria — tudo no WhatsApp pessoal",
  "Renovação manual de planos — você perde recorrência todo mês",
];

const steps = [
  { n: "01", t: "Cadastre sua academia",  d: "Organize os dados, os planos e os horários da sua operação." },
  { n: "02", t: "Cadastre alunos",          d: "Cadastre alunos e associe os planos da academia." },
  { n: "03", t: "Check-in inteligente",    d: "Busque por nome ou CPF e registre a presença." },
  { n: "04", t: "Acompanhe quem se afasta",   d: "Detecta queda de frequência e gera mensagens prontas." },
];

const aiBullets = [
  { icon: TrendingUp, t: "Detecta queda de frequência" },
  { icon: Calendar,   t: "Consulta pagamentos marcados em atraso" },
  { icon: Sparkles,   t: "Prepara texto para revisão" },
  { icon: Users,      t: "Sinaliza alunos sem check-in" },
];

const insights = [
  { sev: "ALTA",    color: "bg-red-500",    title: "Rafael Souza sumiu há 49 dias",     sub: "Exemplo: prepare um contato de acompanhamento" },
  { sev: "URGENTE", color: "bg-amber-500",  title: "Aluno com pagamento marcado em atraso",    sub: "Exemplo: confira o registro antes de entrar em contato" },
  { sev: "ATENÇÃO",color: "bg-orange-500", title: "Aluno sem check-in registrado",    sub: "Exemplo: pergunte se precisa de ajuda" },
];

const testimonials = [
{nome:'Recepção',acad:'Uso do sistema',txt:'Cadastre alunos e registre a presença na academia.'},
{nome:'Gestão',acad:'Uso do sistema',txt:'Organize planos, receitas e despesas em um só painel.'},
{nome:'Relacionamento',acad:'Uso do sistema',txt:'Consulte sugestões por regras e prepare mensagens para envio manual.'}
];

const planos = [
  { name: "Starter",    price: 197, desc: "Para academias começando", features: ["Cadastro de alunos","Check-in","Financeiro básico","Agenda simples","Equipe por email"] },
  { name: "Pro",        price: 397, desc: "Exemplo de oferta", featured: true, features: ["Gestão de planos","AI Growth completo","Relatórios de registros","Links de WhatsApp manual","Multi-modalidade"] },
  { name: "Enterprise", price: 697, desc: "Rede de academias", features: ["Gestão de alunos","Multi-unidade","Grade de aulas","Branding completo","Configuração da academia"] },
];

const faq = [
{q:'Como posso conhecer o sistema?',a:'A demonstração mostra as telas com dados fictícios. No aplicativo, cadastre sua academia e seus dados.'},
{q:'Como funciona o check-in?',a:'A recepção busca o aluno por nome ou CPF e registra a presença. Catracas e dispositivos não estão integrados neste modelo.'},
{q:'O aluno faz matrícula pelo link?',a:'O link registra interesse em plano, trial ou aula experimental. A recepção confirma disponibilidade e condições manualmente.'},
{q:'O financeiro cobra automaticamente?',a:'Não. Os lançamentos e pagamentos são registrados manualmente. Uma integração com gateway pode ser adicionada separadamente.'},
{q:'O AI Growth envia mensagens?',a:'Ele reúne sugestões por regras e oferece um texto para revisão. O envio pelo WhatsApp é manual.'},
{q:'Posso personalizar minha oferta?',a:'Sim. Os preços exibidos são exemplos. Personalize valores, condições, marca e suporte antes de oferecer seu sistema.'}
];

function Landing() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur border-b border-white/5">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#F97316] to-[#FACC15]"><Dumbbell className="h-5 w-5 text-white" /></div>
            <span className="text-lg font-black text-white">GymBoss AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white/70">
            <a href="#modulos" className="hover:text-white">Módulos</a>
            <a href="#como-funciona" className="hover:text-white">Como funciona</a>
            <a href="#pricing" className="hover:text-white">Planos</a>
            <Link to="/demo/dashboard" className="hover:text-white">Demo</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"><Link to="/entrar">Entrar</Link></Button>
            <Button asChild className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-white border-0 hover:opacity-90 font-bold"><Link to="/entrar">Acessar o sistema</Link></Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.25),transparent)]" />
        <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316]/20 to-[#FACC15]/20 border border-[#F97316]/30 text-[#FACC15] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <Sparkles className="h-3.5 w-3.5" /> GESTÃO PARA ACADEMIAS
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Organize sua academia.<br />
            Reative com <span className="bg-gradient-to-r from-[#F97316] to-[#FACC15] bg-clip-text text-transparent">inteligência</span>.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-white/60">
            Gestão de alunos, check-ins, planos, financeiro e sugestões para acompanhar alunos —
            tudo num só sistema fitness.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-white border-0 hover:opacity-90 h-12 px-8 text-base font-bold"><Link to="/entrar">Acessar o sistema <ArrowRight className="h-4 w-4 ml-1.5" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white h-12 px-8 text-base font-bold"><Link to="/demo/dashboard">Ver demonstração</Link></Button>
          </div>
          <p className="mt-5 text-xs text-white/40 font-medium">Cadastro · Planos · Check-ins · Financeiro manual</p>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "Alunos", l: "cadastros organizados" },
            { n: "Agenda", l: "grade semanal" },
            { n: "Check-in", l: "presença registrada" },
            { n: "Gestão", l: "dados da sua operação" },
          ].map(s => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-black">{s.n}</div>
              <div className="text-sm font-semibold text-white/90 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="container mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <div className="text-xs font-black uppercase tracking-widest text-[#F97316] mb-2">9 MÓDULOS · 1 PLATAFORMA</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Tudo que sua academia precisa</h2>
          <p className="text-zinc-500 mt-3 max-w-xl mx-auto">Sem gambiarra, sem planilha. Do cadastro do aluno aos relatórios de frequência — num único lugar.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modulos.map(m => (
            <Card key={m.title} className="border-zinc-200 hover:border-[#F97316]/40 hover:shadow-lg transition group">
              <CardContent className="p-6">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#F97316]/10 to-[#FACC15]/10 flex items-center justify-center mb-4 group-hover:from-[#F97316] group-hover:to-[#FACC15] transition">
                  <m.icon className="h-5 w-5 text-[#F97316] group-hover:text-white transition" />
                </div>
                <h3 className="font-black text-lg">{m.title}</h3>
                <p className="text-sm text-zinc-500 mt-1">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">PROBLEMAS REAIS</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Você já se viu nisso?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {pains.map((p, i) => (
              <div key={i} className="flex gap-3 items-start p-5 rounded-xl border border-red-200 bg-white hover:bg-red-50/50 transition">
                <div className="h-9 w-9 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <p className="text-sm font-semibold text-zinc-800 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="container mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <div className="text-xs font-black uppercase tracking-widest text-[#F97316] mb-2">DO ZERO AO PRIMEIRO CHECK-IN</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Como funciona</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map(s => (
            <div key={s.n} className="relative">
              <div className="text-6xl font-black bg-gradient-to-br from-[#F97316] to-[#FACC15] bg-clip-text text-transparent leading-none">{s.n}</div>
              <h3 className="font-black text-lg mt-3">{s.t}</h3>
              <p className="text-sm text-zinc-500 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Growth dark */}
      <section className="bg-zinc-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(249,115,22,0.15),transparent)]" />
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#FACC15] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-5">
              <Brain className="h-3 w-3" /> AI GROWTH ENGINE
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Informações para acompanhar seus alunos</h2>
            <p className="text-white/60 mt-4 text-lg">Sugestões baseadas em regras e nos registros da academia. Você revisa cada ação e decide quando entrar em contato.</p>
            <div className="grid grid-cols-2 gap-3 mt-8">
              {aiBullets.map(b => (
                <div key={b.t} className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-md bg-gradient-to-br from-[#F97316] to-[#FACC15] flex items-center justify-center"><Check className="h-3.5 w-3.5 text-white" /></div>
                  <span className="text-sm font-semibold text-white/90">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {insights.map((ins, i) => (
              <div key={i} className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-4 flex items-start gap-3 hover:bg-white/10 transition">
                <div className={`${ins.color} text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded shrink-0`}>{ins.sev}</div>
                <div className="flex-1">
                  <div className="font-bold text-white">{ins.title}</div>
                  <div className="text-xs text-white/60 mt-0.5">{ins.sub}</div>
                </div>
                <Sparkles className="h-4 w-4 text-[#FACC15] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <div className="text-xs font-black uppercase tracking-widest text-[#F97316] mb-2">NO DIA A DIA</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Aplicações do sistema</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map(t => (
            <Card key={t.nome} className="border-zinc-200 shadow-sm">
              <CardContent className="p-6">
                
                <p className="text-zinc-800 leading-relaxed">{t.txt}</p>
                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="font-black text-sm">{t.nome}</div>
                  <div className="text-xs text-zinc-500">{t.acad}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-zinc-50 py-24 border-y border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-xs font-black uppercase tracking-widest text-[#F97316] mb-2">OFERTA PERSONALIZÁVEL</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Planos transparentes</h2>
            <p className="text-zinc-500 mt-3">Preços ilustrativos para sua operação. Personalize a oferta antes de vender.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {planos.map(p => (
              <Card key={p.name} className={`relative ${p.featured ? "border-0 shadow-2xl scale-105 bg-gradient-to-br from-[#18181B] to-[#27272A] text-white" : "border-zinc-200 bg-white"}`}>
                {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F97316] to-[#FACC15] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Exemplo de oferta</div>}
                <CardContent className="p-8">
                  <div className={`text-xs font-black uppercase tracking-widest ${p.featured ? "text-[#FACC15]" : "text-[#F97316]"}`}>{p.desc}</div>
                  <h3 className={`text-2xl font-black mt-2 ${p.featured ? "text-white" : "text-zinc-900"}`}>{p.name}</h3>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className={`text-5xl font-black ${p.featured ? "bg-gradient-to-r from-[#F97316] to-[#FACC15] bg-clip-text text-transparent" : "text-zinc-900"}`}>R$ {p.price}</span>
                    <span className={`${p.featured ? "text-white/60" : "text-zinc-500"}`}>/mês</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-[#FACC15]" : "text-emerald-600"}`} />
                        <span className={p.featured ? "text-white/90" : "text-zinc-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full mt-7 font-bold h-11 ${p.featured ? "bg-gradient-to-r from-[#F97316] to-[#FACC15] text-white border-0 hover:opacity-90" : "bg-zinc-900 text-white hover:bg-zinc-800"}`}>
                    <Link to="/entrar">Acessar o sistema</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="text-center mb-12">
          <div className="text-xs font-black uppercase tracking-widest text-[#F97316] mb-2">DÚVIDAS</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible>
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-zinc-200">
              <AccordionTrigger className="text-left font-bold hover:no-underline text-zinc-900">{f.q}</AccordionTrigger>
              <AccordionContent className="text-zinc-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#F97316] to-[#FACC15] text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Zap className="h-12 w-12 mx-auto text-white mb-4" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Sua academia merece mais que planilha</h2>
          <p className="text-white/90 mt-3 text-lg">Conheça a demonstração e organize sua academia.</p>
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <Button asChild size="lg" className="bg-white text-zinc-900 hover:bg-white/90 h-12 px-8 text-base font-black"><Link to="/entrar">Acessar o sistema <ArrowRight className="h-4 w-4 ml-1.5" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white h-12 px-8 text-base font-bold"><Link to="/demo/dashboard">Ver demo primeiro</Link></Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white/60 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#F97316] to-[#FACC15]"><Dumbbell className="h-4 w-4 text-white" /></div>
              <span className="text-white font-black">GymBoss AI</span>
            </div>
            <p className="text-xs">A plataforma que faz sua academia rodar como músculo treinado.</p>
          </div>
          <div>
            <div className="text-white font-bold mb-2 text-xs uppercase tracking-widest">Produto</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link to="/demo/dashboard" className="hover:text-[#FACC15]">Demo</Link></li>
              <li><a href="#modulos" className="hover:text-[#FACC15]">Módulos</a></li>
              <li><a href="#pricing" className="hover:text-[#FACC15]">Preços</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-bold mb-2 text-xs uppercase tracking-widest">Empresa</div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#" className="hover:text-[#FACC15]">Sobre</a></li>
              <li><a href="#" className="hover:text-[#FACC15]">Blog</a></li>
              <li><a href="#" className="hover:text-[#FACC15]">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-bold mb-2 text-xs uppercase tracking-widest">Fale conosco</div>
            <a href="#" className="inline-flex items-center gap-2 text-xs hover:text-[#FACC15]"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp</a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-white/5 text-xs flex justify-between">
          <span>GymBoss AI © 2026 · Feito com 🧡 para academias brasileiras</span>
          <Link to="/entrar" className="hover:text-[#FACC15]">Entrar</Link>
        </div>
      </footer>
    </div>
  );
}

