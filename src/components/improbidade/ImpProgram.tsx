'use client';

import Image from 'next/image';
import { Clock, CheckCircle2, Calendar } from 'lucide-react';

interface Module {
  id: number;
  day: string;
  dayLabel: string;
  title: string;
  speakers: string[];
  speakerImages: string[];
  time: string;
  subtitle: string;
  topics: string[];
}

const modules: Module[] = [
  {
    id: 1, day: '14 MAI', dayLabel: 'Quinta-feira', title: 'Módulo 1',
    speakers: ['Dr. Igor Pinheiro (MPCE)'], speakerImages: ['/1x/igor.png'],
    time: '08:30 — 12:30', subtitle: 'Fundamentos e Arquitetura Jurídica da Improbidade',
    topics: [
      'Panorama e finalidades da Lei de Improbidade: evolução e função no sistema de integridade pública',
      'Tutela constitucional da probidade: princípios, deveres e limites do poder sancionador estatal',
      'Tutela convencional (sistema interamericano/anticorrupção) e impactos interpretativos',
      'Tutela legal após a Lei 14.230/2021: alterações estruturais na Lei de Improbidade Administrativa',
      'Princípios estruturantes pós-reforma: tipicidade, segurança jurídica, proporcionalidade e devido processo',
      'Responsabilização e regimes correlatos: improbidade x penal e disciplinar x contas x eleitoral',
      'Prescrição e marcos temporais na nova lei: linhas gerais e efeitos práticos',
      'Legitimidade ativa e papel institucional: MP, ente lesado e desenho processual pós-2021',
      'Efeitos da reforma em casos em curso: diretrizes de transição e segurança jurídica',
    ],
  },
  {
    id: 2, day: '14 MAI', dayLabel: 'Quinta-feira', title: 'Módulo 2',
    speakers: ['Min. Paulo Sérgio Domingues (STJ)', 'Dr. Igor Pinheiro (MPCE)'],
    speakerImages: ['/1x/igorpaulo.png'],
    time: '14:00 — 18:00', subtitle: 'O Novo Ato de Improbidade e Critérios de Acusação/Condenação',
    topics: [
      'O novo conceito de ato ímprobo: definição, contornos e núcleo sancionador',
      'Elementos estruturais do ilícito: conduta, resultado, nexo, prova e padrão de responsabilização',
      'Dolo e exigências probatórias: requisitos para acusar e condenar',
      'Tipologia por artigos/temas: leitura guiada e interpretação sistemática',
      'Separação por temas: enriquecimento ilícito, dano ao erário e violação de princípios',
      'Dosimetria e sanções: parâmetros, proporcionalidade e fundamentos decisórios',
      'Soluções negociais e acordos no ecossistema da responsabilização',
      'Jurisprudência do STJ aplicada ao mérito: filtros de tipicidade, dolo, prova e limites de revisão',
    ],
  },
  {
    id: 3, day: '15 MAI', dayLabel: 'Sexta-feira', title: 'Módulo 3',
    speakers: ['Dr. Igor Pinheiro (MPCE)'],
    speakerImages: ['/1x/igor.png'],
    time: '08:30 — 12:30', subtitle: 'Julgamento das Ações, Procedimentos e Sistema de Precedentes (STF/STJ/TSE)',
    topics: [
      'Procedimento judicial da ação de improbidade: etapas, pontos de atenção e nulidades relevantes',
      'Procedimentos administrativos e interfaces: sindicância, PAD, corregedorias e comunicação institucional',
      'Taxonomia das decisões vinculantes: ADI, ADPF, repercussão geral, repetitivos e súmulas (como aplicar)',
      'Retrospectiva temática dos julgados 2022—2025 (STF, STJ e TSE): organização por assuntos e efeitos práticos',
      'Eficácia vinculante e grau de obrigatoriedade: o que vincula, o que orienta e como demonstrar aderência',
      'Retroatividade/irretroatividade e modulação: impactos em ações em curso e casos antigos',
      'Provas e padrão de fundamentação: motivação, correlação fática e uso correto de precedentes',
      'Jurisprudência do STJ sobre rito e julgamento: admissibilidade, limites de cognição e questões processuais centrais',
    ],
  },
  {
    id: 4, day: '15 MAI', dayLabel: 'Sexta-feira', title: 'Módulo 4',
    speakers: ['Min. Teodoro Santos Silva (STJ)', 'Dr. Igor Pinheiro (MPCE)'],
    speakerImages: ['/1x/igorteodoro.png'],
    time: '14:00 — 18:00', subtitle: 'Eleições 2026, Recurso Especial no STJ, MP Investigatório e Abuso de Autoridade',
    topics: [
      'Eleições 2026 e improbidade: impactos práticos, pontos sensíveis e condutas de risco',
      'Interseção improbidade x Justiça Eleitoral: efeitos e cautelas institucionais',
      'Recurso Especial e Lei 14.230/2021: hipóteses de cabimento, estrutura e estratégia recursal',
      'Juízo de admissibilidade no STJ: filtros, óbices e como reduzir riscos de inadmissão',
      'Limites de cognição do STJ e impugnações cabíveis: o que pode e o que não pode ser reexaminado',
      'Taxonomia e regime jurídico dos procedimentos investigatórios do Ministério Público: bases normativas e jurisprudência',
      'Controle e garantias na investigação: prazos, atos, contraditório diferido e validade de provas',
      'Nova Lei do Abuso de Autoridade (Lei 13.869/2019) e interpretação jurisprudencial: riscos e boas práticas',
      'Fluxo de compliance institucional para ano eleitoral: governança, registros, decisão motivada e trilha de auditoria',
    ],
  },
];

export default function ImpProgram() {
  const day1 = modules.filter((m) => m.day === '14 MAI');
  const day2 = modules.filter((m) => m.day === '15 MAI');

  const renderModule = (mod: Module) => (
    <div key={mod.id} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Header: photo + info */}
      <div className="flex flex-row items-center gap-5 p-6 pb-4">
        {/* Speaker photo */}
        <div className="relative flex-shrink-0 w-28 h-28">
          <Image src={mod.speakerImages[0]} alt={mod.speakers.join(' e ')} fill className="object-cover object-top" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-[#0885fe] font-extrabold text-2xl uppercase tracking-wide mb-1">
            {mod.title}
          </h3>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-0.5">
            {mod.speakers.length > 1 ? 'Palestrantes:' : 'Palestrante:'}
          </p>
          {mod.speakers.map((speaker) => (
            <p key={speaker} className="text-[#0885fe] font-bold text-base leading-snug">
              {speaker}
            </p>
          ))}
        </div>
      </div>

      {/* Time badge */}
      <div className="px-6 pb-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-base text-gray-600 font-medium">
          <Clock className="w-4 h-4 text-[#0885fe]" />
          Horário — {mod.time}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-gray-200" />

      {/* Content / Ementa */}
      <div className="p-6">
        <p className="text-gray-900 font-bold text-base uppercase tracking-wide mb-4">
          Conteúdo — <span className="normal-case font-semibold">{mod.subtitle}</span>
        </p>
        <div className="space-y-3">
          {mod.topics.map((topic, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0885fe] flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-600 leading-relaxed">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDay = (dayModules: Module[], dayNum: string, dayMonth: string, dayName: string) => (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 border-b border-gray-200 py-16 last:border-0">
      {/* Sticky Date Column */}
      <div className="lg:w-48 flex-none">
        <div className="lg:sticky lg:top-32 text-left">
          <span className="text-7xl lg:text-8xl font-bold text-gray-900 tracking-tighter leading-none block">
            {dayNum}
          </span>
          <span className="text-xl lg:text-2xl text-[#0885fe] font-bold uppercase tracking-wide block -mt-1 mb-2">
            {dayMonth}
          </span>
          <div className="h-1 w-12 bg-gray-900 rounded-full mb-3" />
          <span className="text-base font-bold text-gray-400 uppercase tracking-widest">
            {dayName}
          </span>
        </div>
      </div>

      {/* Modules */}
      <div className="flex-1 space-y-6">
        {dayModules.map(renderModule)}
      </div>
    </div>
  );

  return (
    <section id="programacao" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            14 E 15 DE MAIO
          </div>
          <h2 className="text-4xl lg:text-[72px] font-bold text-gray-900 leading-none tracking-tight">
            Programação
          </h2>
        </div>

        {/* Days */}
        <div className="flex flex-col">
          {renderDay(day1, '14', 'DE MAIO', 'Quinta-feira')}
          {renderDay(day2, '15', 'DE MAIO', 'Sexta-feira')}
        </div>
      </div>
    </section>
  );
}
