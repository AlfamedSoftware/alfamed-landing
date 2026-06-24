import {
  Users,
  Calendar,
  ClipboardList,
  Activity,
  Building2,
  Star,
  Smartphone,
  CheckCircle2,
  Clock,
  UserCheck,
  FileText,
  ArrowRight,
  Shield,
  Stethoscope,
  ChevronRight,
  LayoutDashboard,
  Search,
  Bell,
} from "lucide-react"
import { Navbar } from "@/components/navbar"

const APP_URL = "https://web-alfamed.vercel.app"

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Web + App Mobile
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Gestão clínica inteligente do agendamento ao atendimento
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl leading-relaxed">
              Plataforma completa para unidades de saúde. Gerencie profissionais,
              especialidades, procedimentos e atendimentos — tudo integrado em um
              único sistema.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 font-semibold text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                Acessar o sistema
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Conheça os recursos
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "8+", label: "Módulos integrados" },
                { value: "4", label: "Perfis de acesso" },
                { value: "Web + Mobile", label: "Plataformas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — UI mockup */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide">
                      Agendas de hoje
                    </p>
                    <p className="text-white font-semibold text-lg mt-0.5">
                      Quinta-feira, 24 Jun
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    {["blue", "cyan", "indigo"].map((c, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-blue-700 bg-${c}-400 flex items-center justify-center text-white text-xs font-bold`}
                      />
                    ))}
                  </div>
                </div>

                {/* Schedule items */}
                <div className="space-y-3">
                  {[
                    { time: "08:00", name: "Maria S.", specialty: "Cardiologia", status: "done" },
                    { time: "09:00", name: "João P.", specialty: "Ortopedia", status: "active" },
                    { time: "10:00", name: "Ana L.", specialty: "Pediatria", status: "pending" },
                    { time: "11:00", name: "Carlos M.", specialty: "Cardiologia", status: "pending" },
                  ].map((item) => (
                    <div
                      key={item.time}
                      className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
                    >
                      <span className="text-white/70 text-xs font-mono w-10 shrink-0">
                        {item.time}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-white text-sm font-medium truncate">{item.name}</p>
                        <p className="text-white/50 text-xs">{item.specialty}</p>
                      </div>
                      <span
                        className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${
                          item.status === "done"
                            ? "bg-green-500/20 text-green-300"
                            : item.status === "active"
                              ? "bg-amber-500/20 text-amber-300"
                              : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {item.status === "done"
                          ? "Finalizado"
                          : item.status === "active"
                            ? "Em andamento"
                            : "Agendado"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Occupancy bar */}
                <div className="mt-5">
                  <div className="flex justify-between text-xs text-white/60 mb-2">
                    <span>Ocupação da agenda</span>
                    <span>3/8 vagas</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[37%] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Atendimento finalizado</p>
                  <p className="text-sm font-semibold text-gray-900">Maria S.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 37.3C840 43 960 53 1080 56C1200 59 1320 53 1380 50L1440 48V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

// ─── Plataforma (visão geral) ─────────────────────────────────────────────────

function Platform() {
  const highlights = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Autenticação segura",
      desc: "Login com sessão protegida, redefinição de senha e controle de acesso por papel.",
    },
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Multi-unidades",
      desc: "Um mesmo usuário pode ter acesso a várias unidades e alternar entre elas após o login.",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Controle por perfil",
      desc: "Médico, Administrativo, Assistente e Alfamed Interno — cada papel vê apenas o que precisa.",
    },
  ]

  return (
    <section id="plataforma" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            A plataforma
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Alfamed: o sistema de saúde completo para sua unidade
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Do cadastro de profissionais ao prontuário do paciente — o Alfamed
            centraliza toda a gestão clínica com simplicidade e segurança.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-100 transition-colors group"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {h.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{h.title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Funcionalidades (módulos web) ────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      color: "blue",
      title: "Profissionais",
      desc: "Cadastro completo, importação por CPF ou nome, vínculo a unidades e gerenciamento de especialidades de cada médico.",
      items: ["Cadastro e edição", "Importação por CPF ou nome", "Vínculo a especialidades", "Controle de status na unidade"],
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      color: "cyan",
      title: "Agendas",
      desc: "Grade de horários com vagas em tempo real, filtros por profissional e especialidade, navegação por dia.",
      items: ["Grade de vagas com cores de ocupação", "Filtro por médico e especialidade", "Cadastro de novas agendas", "Verificação de conflito de horário"],
    },
    {
      icon: <Activity className="w-6 h-6" />,
      color: "green",
      title: "Atendimentos",
      desc: "Condução do atendimento clínico com ciclo completo de status, notas clínicas e diagnóstico.",
      items: ["Prontuário com notas clínicas", "Diagnóstico por atendimento", "Ciclo: Agendado → Em andamento → Finalizado", "Registro de falta do paciente"],
    },
    {
      icon: <Star className="w-6 h-6" />,
      color: "violet",
      title: "Especialidades",
      desc: "Gerencie especialidades médicas da unidade e vincule-as a profissionais e procedimentos.",
      items: ["Cadastro e edição", "Ativar / inativar por unidade", "Vínculo com profissionais médicos", "Integração com procedimentos e agendas"],
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      color: "amber",
      title: "Procedimentos",
      desc: "Consultas, retornos e exames com código, preço e especialidade vinculada, escopados por unidade.",
      items: ["Tipos: Consulta, Retorno, Exame", "Código de 10 dígitos alfanuméricos", "Preço em formato brasileiro", "Filtro e busca na listagem"],
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      color: "rose",
      title: "Unidades",
      desc: "Visualize e edite os dados da sua unidade de saúde: CNPJ, endereço, estado, cidade e contato.",
      items: ["Dados completos da unidade", "CNPJ, telefone e e-mail", "Endereço com estado e cidade", "Edição direta pelo painel"],
    },
  ]

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white",
    green: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    violet: "bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
    amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
    rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
  }

  const borderMap: Record<string, string> = {
    blue: "hover:border-blue-200",
    cyan: "hover:border-cyan-200",
    green: "hover:border-green-200",
    violet: "hover:border-violet-200",
    amber: "hover:border-amber-200",
    rose: "hover:border-rose-200",
  }

  return (
    <section id="funcionalidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Módulos web
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Funcionalidades completas para sua equipe
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Cada módulo foi construído para o fluxo real de uma unidade de saúde.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all ${borderMap[f.color]}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors mb-5 ${colorMap[f.color]}`}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {f.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ServiceDesk ──────────────────────────────────────────────────────────────

function ServiceDesk() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-slate-400 text-xs font-mono">
                  alfamed / ServiceDesk
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { name: "Unidade Centro SP", units: "12 profissionais", status: "Ativa" },
                  { name: "Unidade Norte RJ", units: "8 profissionais", status: "Ativa" },
                  { name: "Unidade Sul MG", units: "5 profissionais", status: "Ativa" },
                ].map((u) => (
                  <div
                    key={u.name}
                    className="flex items-center justify-between bg-slate-700/50 rounded-xl px-4 py-3"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{u.name}</p>
                      <p className="text-slate-400 text-xs">{u.units}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                      {u.status}
                    </span>
                  </div>
                ))}

                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-slate-400 text-xs mb-2">UPM — Usuários & Profissionais</p>
                  <div className="flex items-center gap-3 bg-slate-700/50 rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                      T
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Thiago R.</p>
                      <p className="text-slate-400 text-xs">Alfamed Interno</p>
                    </div>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                      Admin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              ServiceDesk
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Central de controle para a equipe Alfamed
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Área exclusiva (domínio <code className="text-blue-600">@alfamed.com</code>) para
              gerenciar todas as unidades cadastradas na plataforma, controlar usuários e
              profissionais vinculados.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: <Building2 className="w-5 h-5" />, text: "Listagem e detalhes de todas as unidades" },
                { icon: <Users className="w-5 h-5" />, text: "Gestão de usuários e profissionais (UPM)" },
                { icon: <Shield className="w-5 h-5" />, text: "Acesso restrito a e-mails @alfamed.com" },
                { icon: <Search className="w-5 h-5" />, text: "Visualização completa de vínculos e perfis" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Mobile ───────────────────────────────────────────────────────────────────

function Mobile() {
  const mobileFeatures = [
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Cadastro como paciente",
      desc: "Crie sua conta informando nome, CPF, e-mail, telefone e data de nascimento.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Agendamentos",
      desc: "Visualize suas consultas agendadas e acompanhe o status de cada atendimento.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Prontuário e exames",
      desc: "Acesse seu histórico clínico, resultados de exames e fichas de anamnese.",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Perfil pessoal",
      desc: "Atualize seus dados, troque de senha e gerencie seu acesso à plataforma.",
    },
  ]

  return (
    <section id="mobile" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              App mobile
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Na palma da mão do seu paciente
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              O app Alfamed para Android e iOS conecta o paciente diretamente à
              unidade de saúde — desde o cadastro até o acompanhamento dos seus
              atendimentos.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {mobileFeatures.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{f.title}</h4>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              Disponível para Android e iOS
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-3 shadow-2xl ring-4 ring-slate-700">
                {/* Notch */}
                <div className="w-20 h-5 bg-slate-900 rounded-full mx-auto mb-3" />
                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
                    <span className="text-white text-xs font-bold">Alfamed</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-white/40" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3 bg-gray-50 min-h-[380px]">
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                      Suas consultas
                    </p>

                    {[
                      { date: "24 Jun", time: "09:00", spec: "Cardiologia", status: "Confirmada" },
                      { date: "01 Jul", time: "14:30", spec: "Pediatria", status: "Agendada" },
                      { date: "10 Jul", time: "08:00", spec: "Ortopedia", status: "Agendada" },
                    ].map((appt, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-gray-900 text-xs font-semibold">{appt.spec}</p>
                            <p className="text-gray-400 text-xs mt-0.5">
                              {appt.date} · {appt.time}
                            </p>
                          </div>
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                              appt.status === "Confirmada"
                                ? "bg-green-50 text-green-600"
                                : "bg-blue-50 text-blue-600"
                            }`}
                          >
                            {appt.status}
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="bg-blue-600 rounded-xl p-3 text-center mt-2">
                      <Stethoscope className="w-5 h-5 text-white mx-auto mb-1" />
                      <p className="text-white text-xs font-medium">Meu prontuário</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notifications */}
              <div className="absolute -right-4 top-16 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100 w-44">
                <div className="flex items-center gap-2">
                  <Bell className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <p className="text-xs text-gray-700 font-medium">Consulta amanhã às 09h</p>
                </div>
              </div>
              <div className="absolute -left-4 bottom-24 bg-white rounded-xl shadow-lg px-3 py-2.5 border border-gray-100 w-40">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  <p className="text-xs text-gray-700 font-medium">Agendamento confirmado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Perfis ───────────────────────────────────────────────────────────────────

function Roles() {
  const roles = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Médico",
      color: "blue",
      desc: "Acessa apenas sua própria agenda, conduz atendimentos e registra prontuários, diagnósticos e notas clínicas.",
      badge: "Web",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Administrativo",
      color: "violet",
      desc: "Gestão completa da unidade: profissionais, especialidades, procedimentos, agendas e agendamentos de pacientes.",
      badge: "Web",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Assistente Administrativo",
      color: "cyan",
      desc: "Acesso focado em agendas — agenda e gerencia pacientes nas vagas disponíveis dos médicos da unidade.",
      badge: "Web",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Paciente",
      color: "green",
      desc: "Cria conta pelo app mobile, visualiza consultas agendadas, acessa prontuário e exames.",
      badge: "Mobile",
    },
  ]

  const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", badge: "bg-cyan-100 text-cyan-700" },
    green: { bg: "bg-green-50", text: "text-green-600", badge: "bg-green-100 text-green-700" },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Perfis de acesso
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Cada usuário acessa só o que precisa
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Permissões granulares por papel garantem segurança e foco em cada função.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((r) => {
            const c = colorMap[r.color]
            return (
              <div key={r.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-4`}>
                  {r.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{r.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.badge}`}>
                    {r.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Como funciona ────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Faça login e selecione sua unidade",
      desc: "Acesse com seu e-mail e senha. Se tiver mais de uma unidade vinculada, escolha com qual deseja trabalhar — ou deixe o sistema selecionar automaticamente.",
      color: "blue",
    },
    {
      number: "02",
      title: "Configure profissionais, especialidades e procedimentos",
      desc: "Cadastre médicos e assistentes, defina as especialidades oferecidas e registre os procedimentos com tipo, código e preço.",
      color: "cyan",
    },
    {
      number: "03",
      title: "Crie agendas e realize atendimentos",
      desc: "Monte a grade de horários de cada médico, agende pacientes nas vagas disponíveis e conduza o atendimento com prontuário digital completo.",
      color: "green",
    },
  ]

  const colorMap: Record<string, { num: string; line: string; dot: string }> = {
    blue: { num: "text-blue-600 bg-blue-50", line: "border-blue-200", dot: "bg-blue-600" },
    cyan: { num: "text-cyan-600 bg-cyan-50", line: "border-cyan-200", dot: "bg-cyan-600" },
    green: { num: "text-green-600 bg-green-50", line: "border-green-200", dot: "bg-green-600" },
  }

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Simples de usar, poderoso de verdade
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Em três passos, sua unidade está operando com o Alfamed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 border-t-2 border-dashed border-gray-200 z-0" />

          {steps.map((step) => {
            const c = colorMap[step.color]
            return (
              <div key={step.number} className="relative z-10 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl ${c.num} flex items-center justify-center text-2xl font-black mx-auto shadow-sm`}
                >
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CTA final ────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Pronto para modernizar sua unidade de saúde?
        </h2>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
          Acesse o Alfamed agora e comece a gerenciar profissionais, agendas e
          atendimentos com eficiência.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Acessar o sistema
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-lg text-white">Alfamed</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Plataforma integrada de gestão clínica para unidades de saúde. Web
              e mobile, do agendamento ao atendimento.
            </p>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Plataforma
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["Profissionais", "Agendas", "Atendimentos", "Especialidades", "Procedimentos", "Unidades"].map(
                (item) => (
                  <li key={item}>
                    <a href="#funcionalidades" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Acesso */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Acesso
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Entrar no sistema
                </a>
              </li>
              <li>
                <a href="#mobile" className="hover:text-white transition-colors">
                  App Mobile
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {year} Alfamed. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-600">
            Gestão clínica inteligente para unidades de saúde
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Platform />
        <Features />
        <ServiceDesk />
        <Mobile />
        <Roles />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
