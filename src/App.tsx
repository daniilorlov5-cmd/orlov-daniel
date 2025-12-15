import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ManagementSection from './components/ManagementSection'
import TimelineSection from './components/TimelineSection'
import CareerTimelineSection from './components/CareerTimelineSection'
import PublicSpeakingSection from './components/PublicSpeakingSection'
import SpeakingGrowthSection from './components/SpeakingGrowthSection'
import CRMProjectSection from './components/CRMProjectSection'
import TGScopeSection from './components/TGScopeSection'
import TGAdsSection from './components/TGAdsSection'
import TruePeopleSection from './components/TruePeopleSection'
import VibeCodingSection from './components/VibeCodingSection'
import FirstTeamSection from './components/FirstTeamSection'
import HackathonSection from './components/HackathonSection'
import TeamValueSection from './components/TeamValueSection'
import ServicesSection from './components/ServicesSection'
import Background3D from './components/Background3D'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Background3D />
      
      <a 
        href="https://t.me/orlovdaniel" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Связаться со мной в Telegram"
        style={{
          position: 'fixed',
bottom: '24px',
        right: '24px',
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, #0088cc 0%, #00a8e8 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0, 136, 204, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 9999,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(0, 136, 204, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 136, 204, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)';
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </a>

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <ManagementSection />
      <TimelineSection />
      <CareerTimelineSection />
      <PublicSpeakingSection />
      <SpeakingGrowthSection />
      <CRMProjectSection />
      <TGScopeSection />
      <TGAdsSection />
      <TruePeopleSection />
      <VibeCodingSection />
      <FirstTeamSection />
      <HackathonSection />
      <TeamValueSection />
      <ServicesSection />

      <footer
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '32px 20px 40px',
          textAlign: 'center',
          background:
            'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.03) 100%)',
          borderTop: '1px solid rgba(139, 92, 246, 0.1)',
        }}
      >
        <p
          style={{
            fontSize: '0.9rem',
            color: '#64748b',
            fontWeight: 500,
            margin: 0,
          }}
        >
          Этот сайт сделан мной за один вечер. От идеи до кода.
        </p>
        <p
          style={{
            marginTop: '8px',
            fontSize: '0.8rem',
            color: '#94a3b8',
          }}
        >
          © Даниил Орлов, 2025
        </p>
      </footer>
    </div>
  )
}

export default App

