import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChatAssistant from '../shared/ChatAssistant'
import NewsletterModal from '../ui/NewsletterModal'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatAssistant />
      <NewsletterModal />
    </div>
  )
}
