import { Route, Routes } from 'react-router-dom'

import { Layout } from 'components'
import { Feed } from 'features/feed'
import Profile from 'features/profile'
import Community from 'features/community'
import ScrollToTop from './components/ScrollToTop/index'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
