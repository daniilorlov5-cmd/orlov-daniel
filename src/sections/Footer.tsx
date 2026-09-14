import { EMAIL, TG_LINK, VK_LINK } from '../lib/constants'

export default function Footer() {
  return (
    <div className="container-x">
      <footer className="footer">
        <div className="links">
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={VK_LINK} target="_blank" rel="noopener noreferrer">VK</a>
        </div>
        <div>© Даниил Орлов, 2026 · Сайт собран мной: от идеи до кода</div>
      </footer>
    </div>
  )
}
