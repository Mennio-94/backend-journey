import { useState } from "react";

const courses = [
  {
    id: 1,
    phase: 1,
    phaseName: "Fondations",
    phaseColor: "#0D9488",
    title: "Mettez en place votre environnement Python",
    difficulty: "Facile",
    duration: "6h",
    description:
      "Installez Python, pip, virtual env et PyCharm. La base indispensable avant d'écrire la moindre ligne de code.",
    why: "Votre projet copytrading tourne sur Python 3.11+ avec UV, Docker et des environnements virtuels. Sans cette base, impossible de lancer le moindre service.",
    skills: ["Installation Python", "pip & venv", "PyCharm IDE", "Terminal"],
    projectLink:
      "Configuration des Dockerfiles avec UV, gestion des .venv dans chaque package du monorepo.",
  },
  {
    id: 2,
    phase: 1,
    phaseName: "Fondations",
    phaseColor: "#0D9488",
    title: "Apprenez les bases du langage Python",
    difficulty: "Facile",
    duration: "6h",
    description:
      "Variables, boucles, conditions, fonctions, listes, dictionnaires. Le socle syntaxique de Python.",
    why: "Tout le backend copytrading est en Python. Chaque fichier — des handlers WebSocket aux tâches Celery — utilise ces fondamentaux en permanence.",
    skills: ["Variables & types", "Boucles & conditions", "Fonctions", "Structures de données"],
    projectLink:
      "Lecture et compréhension du code existant : services, repositories, handlers d'événements.",
  },
  {
    id: 3,
    phase: 1,
    phaseName: "Fondations",
    phaseColor: "#0D9488",
    title: "Gérez votre environnement Python avec UV",
    difficulty: "Facile",
    duration: "2h",
    description:
      "Maîtrisez UV pour gérer vos environnements virtuels et dépendances plus rapidement que pip.",
    why: "Le projet utilise UV dans tous ses Dockerfiles pour installer les packages du monorepo. Comprendre UV = comprendre le build pipeline.",
    skills: ["UV package manager", "Gestion dépendances", "Environnements virtuels", "pyproject.toml"],
    projectLink:
      "Les Dockerfiles utilisent 'uv pip install' pour chaque module : copytrading-core, copytrading-web, copytrading-ws, copytrading-celery.",
  },
  {
    id: 4,
    phase: 2,
    phaseName: "Montée en compétences",
    phaseColor: "#7C3AED",
    title: "Apprenez la programmation orientée objet avec Python",
    difficulty: "Moyenne",
    duration: "12h",
    description:
      "Classes, méthodes, héritage, encapsulation. Pensez le code comme des objets du monde réel.",
    why: "L'architecture entière repose sur la POO : les Models SQLAlchemy, les Repositories, les Services, les Handlers, les Factory patterns du client WebSocket.",
    skills: ["Classes & objets", "Héritage", "Encapsulation", "Méthodes spéciales"],
    projectLink:
      "ClientFactory, ConnectionManager, BaseRepository, les Models avec mixins (TimestampMixin, UUIDMixin).",
  },
  {
    id: 5,
    phase: 2,
    phaseName: "Montée en compétences",
    phaseColor: "#7C3AED",
    title: "Découvrez la programmation orientée objet avec Python",
    difficulty: "Moyenne",
    duration: "6h",
    description:
      "Approfondissez la POO : les quatre piliers, design patterns, code structuré, réutilisable et évolutif.",
    why: "Le monorepo suit des patterns avancés : Factory, Repository, Strategy (handlers d'événements), Pool. La POO avancée est le ciment de l'architecture.",
    skills: ["4 piliers POO", "Design patterns", "Abstraction", "Polymorphisme"],
    projectLink:
      "EventFactory, PositionEventHandler, MarketOrderHandler, ClosePositionHandler — tous basés sur le polymorphisme.",
  },
  {
    id: 6,
    phase: 3,
    phaseName: "Qualité & Production",
    phaseColor: "#DC2626",
    title: "Écrivez du code Python maintenable",
    difficulty: "Facile",
    duration: "8h",
    description:
      "PEP 8, design patterns clés, principes SOLID. Rendez votre code propre, lisible et facile à modifier.",
    why: "Un projet avec 4 packages interconnectés exige un code maintenable. Les principes SOLID sont visibles dans la séparation core/web/ws/celery.",
    skills: ["PEP 8", "SOLID", "Design patterns", "Code review"],
    projectLink:
      "Séparation des responsabilités : core (modèles + config), web (API), ws (WebSocket), celery (tâches async).",
  },
  {
    id: 7,
    phase: 3,
    phaseName: "Qualité & Production",
    phaseColor: "#DC2626",
    title: "Testez votre projet Python",
    difficulty: "Moyenne",
    duration: "10h",
    description:
      "Tests unitaires, d'intégration, mocking, couverture. Apprenez à valider votre code de manière systématique.",
    why: "Chaque module du monorepo a besoin de tests. Les tâches Celery de réplication, les handlers WebSocket, les endpoints FastAPI — tout doit être testé.",
    skills: ["pytest", "Mocking", "Tests d'intégration", "Couverture de code"],
    projectLink:
      "Tester les tâches de réplication (open/close/update), les endpoints API, la logique de connexion cTrader.",
  },
  {
    id: 8,
    phase: 3,
    phaseName: "Qualité & Production",
    phaseColor: "#DC2626",
    title: "Débuggez un projet Python",
    difficulty: "Moyenne",
    duration: "8h",
    description:
      "Méthodologie pour éliminer les bugs en Python classique, Flask et Django. Applicable à FastAPI.",
    why: "Débugger des WebSockets Protobuf, des tâches Celery asynchrones et des connexions cTrader en temps réel demande une méthodologie solide.",
    skills: ["Debugger", "Logging", "Profiling", "Stack traces"],
    projectLink:
      "Le projet a déjà un setup_logging avancé avec HealthCheckFilter. Le debugging est critique pour les connexions cTrader SSL.",
  },
];

const phases = [
  {
    id: 1,
    name: "Fondations",
    subtitle: "Installer, configurer, coder",
    color: "#0D9488",
    bgLight: "#F0FDFA",
    totalHours: 14,
    icon: "🧱",
    description: "Posez les bases solides : environnement, syntaxe, outillage.",
  },
  {
    id: 2,
    name: "Montée en compétences",
    subtitle: "Architecturer, structurer",
    color: "#7C3AED",
    bgLight: "#F5F3FF",
    totalHours: 18,
    icon: "🏗️",
    description: "Maîtrisez la POO et les patterns qui structurent le projet.",
  },
  {
    id: 3,
    name: "Qualité & Production",
    subtitle: "Tester, maintenir, débugger",
    color: "#DC2626",
    bgLight: "#FEF2F2",
    totalHours: 26,
    icon: "🚀",
    description: "Livrez du code robuste, testé et maintenable en production.",
  },
];

const DifficultyBadge = ({ level }) => {
  const config = {
    Facile: { bg: "#DCFCE7", color: "#166534", dots: 1 },
    Moyenne: { bg: "#FEF3C7", color: "#92400E", dots: 2 },
  };
  const c = config[level] || config.Facile;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: 600,
        fontFamily: "'DM Sans', sans-serif",
        background: c.bg,
        color: c.color,
        letterSpacing: "0.02em",
      }}
    >
      {Array.from({ length: c.dots }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: c.color,
          }}
        />
      ))}
      {level}
    </span>
  );
};

const CourseCard = ({ course, index, isExpanded, onToggle }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "14px",
        border: `1px solid ${isExpanded ? course.phaseColor + "40" : "#E5E7EB"}`,
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isExpanded
          ? `0 8px 30px ${course.phaseColor}15, 0 0 0 1px ${course.phaseColor}20`
          : "0 1px 3px rgba(0,0,0,0.04)",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      {/* Header */}
      <div style={{ padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
        {/* Number */}
        <div
          style={{
            minWidth: 38,
            height: 38,
            borderRadius: "10px",
            background: `linear-gradient(135deg, ${course.phaseColor}, ${course.phaseColor}CC)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: "15px",
            fontFamily: "'Space Mono', monospace",
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "6px" }}>
            <DifficultyBadge level={course.difficulty} />
            <span
              style={{
                fontSize: "11px",
                color: "#6B7280",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              ⏱ {course.duration}
            </span>
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#111827",
              lineHeight: 1.35,
            }}
          >
            {course.title}
          </h3>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: "13px",
              color: "#6B7280",
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.5,
            }}
          >
            {course.description}
          </p>
        </div>

        {/* Toggle */}
        <div
          style={{
            minWidth: 28,
            height: 28,
            borderRadius: "50%",
            background: isExpanded ? course.phaseColor + "15" : "#F3F4F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: isExpanded ? course.phaseColor : "#9CA3AF",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div
          style={{
            padding: "0 24px 20px",
            borderTop: `1px solid ${course.phaseColor}15`,
            animation: "fadeIn 0.3s ease",
          }}
        >
          {/* Why */}
          <div
            style={{
              marginTop: "16px",
              padding: "14px 16px",
              background: `${course.phaseColor}08`,
              borderRadius: "10px",
              borderLeft: `3px solid ${course.phaseColor}`,
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: course.phaseColor,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "6px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Pourquoi ce cours pour le projet Copytrading ?
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#374151",
                lineHeight: 1.6,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {course.why}
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginTop: "14px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "8px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Compétences acquises
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {course.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "#F3F4F6",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#4B5563",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Project link */}
          <div
            style={{
              marginTop: "14px",
              padding: "12px 14px",
              background: "#F9FAFB",
              borderRadius: "8px",
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>🔗</span>
            <div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Application concrète dans le projet
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#6B7280",
                  lineHeight: 1.55,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {course.projectLink}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Programme() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [activePhase, setActivePhase] = useState(null);

  const totalHours = courses.reduce((sum, c) => sum + parseInt(c.duration), 0);

  const filteredCourses = activePhase ? courses.filter((c) => c.phase === activePhase) : courses;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAFA",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
          padding: "40px 24px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "20px",
              background: "rgba(14, 165, 233, 0.15)",
              border: "1px solid rgba(14, 165, 233, 0.25)",
              fontSize: "11px",
              fontWeight: 600,
              color: "#7DD3FC",
              letterSpacing: "0.05em",
              marginBottom: "16px",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            OPENCLASSROOMS × COPYTRADING
          </div>
          <h1
            style={{
              margin: "0 0 8px",
              fontSize: "28px",
              fontWeight: 700,
              color: "#F1F5F9",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.2,
            }}
          >
            Programme de Formation Python
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#94A3B8",
              lineHeight: 1.6,
              maxWidth: 520,
            }}
          >
            8 cours organisés en 3 phases progressives, alignés sur les compétences nécessaires pour contribuer au projet de copytrading cTrader.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Cours", value: "8", icon: "📚" },
              { label: "Heures", value: `${totalHours}h`, icon: "⏱" },
              { label: "Phases", value: "3", icon: "📈" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "18px" }}>{stat.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#F1F5F9",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "10px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px 60px" }}>
        {/* Phase filters */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setActivePhase(null)}
            style={{
              padding: "8px 16px",
              borderRadius: "10px",
              border: `1.5px solid ${!activePhase ? "#0F172A" : "#E5E7EB"}`,
              background: !activePhase ? "#0F172A" : "#FFFFFF",
              color: !activePhase ? "#FFFFFF" : "#6B7280",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s",
            }}
          >
            Tout voir
          </button>
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
              style={{
                padding: "8px 16px",
                borderRadius: "10px",
                border: `1.5px solid ${activePhase === phase.id ? phase.color : "#E5E7EB"}`,
                background: activePhase === phase.id ? phase.color + "12" : "#FFFFFF",
                color: activePhase === phase.id ? phase.color : "#6B7280",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {phase.icon} {phase.name}
            </button>
          ))}
        </div>

        {/* Phases + courses */}
        {phases
          .filter((p) => !activePhase || p.id === activePhase)
          .map((phase) => {
            const phaseCourses = filteredCourses.filter((c) => c.phase === phase.id);
            if (phaseCourses.length === 0) return null;

            return (
              <div key={phase.id} style={{ marginBottom: "32px" }}>
                {/* Phase header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                    padding: "14px 18px",
                    background: phase.bgLight,
                    borderRadius: "12px",
                    border: `1px solid ${phase.color}20`,
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{phase.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <h2
                        style={{
                          margin: 0,
                          fontSize: "17px",
                          fontWeight: 700,
                          color: phase.color,
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        Phase {phase.id} — {phase.name}
                      </h2>
                      <span
                        style={{
                          fontSize: "11px",
                          color: `${phase.color}99`,
                          fontWeight: 500,
                        }}
                      >
                        {phase.totalHours}h
                      </span>
                    </div>
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontSize: "12px",
                        color: "#6B7280",
                        lineHeight: 1.5,
                      }}
                    >
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Course list with timeline */}
                <div style={{ position: "relative", paddingLeft: "20px" }}>
                  {/* Vertical line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "8px",
                      top: "20px",
                      bottom: "20px",
                      width: "2px",
                      background: `linear-gradient(to bottom, ${phase.color}40, ${phase.color}10)`,
                      borderRadius: "1px",
                    }}
                  />

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {phaseCourses.map((course, idx) => (
                      <div key={course.id} style={{ position: "relative" }}>
                        {/* Timeline dot */}
                        <div
                          style={{
                            position: "absolute",
                            left: "-16px",
                            top: "24px",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: expandedCourse === course.id ? phase.color : "#FFFFFF",
                            border: `2px solid ${phase.color}`,
                            transition: "all 0.2s",
                            zIndex: 1,
                          }}
                        />
                        <CourseCard
                          course={course}
                          index={courses.indexOf(course)}
                          isExpanded={expandedCourse === course.id}
                          onToggle={() =>
                            setExpandedCourse(expandedCourse === course.id ? null : course.id)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

        {/* Footer recap */}
        <div
          style={{
            marginTop: "16px",
            padding: "20px 24px",
            background: "linear-gradient(135deg, #0F172A, #1E293B)",
            borderRadius: "14px",
            color: "#F1F5F9",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div style={{ position: "relative" }}>
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              🎯 À l'issue de ce programme
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#94A3B8",
                lineHeight: 1.7,
              }}
            >
              Vous serez capable de comprendre et contribuer à l'architecture complète du projet
              copytrading : le monorepo Python avec UV, l'API REST FastAPI, les WebSockets cTrader
              avec Protobuf, les workers Celery pour la réplication de trades, et les patterns
              avancés (Factory, Repository, Pool) qui structurent le tout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}