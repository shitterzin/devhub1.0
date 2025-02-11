import { Sidebar } from '../components/Sidebar'
import { Tweet } from '../components/Tweet'
import { TwitterForm } from '../components/TwitterForm'
import { v4 } from "uuid"
import { getAvatar, getRandomImage } from '../utils/generateimages'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { TrendItem } from '../components/TrendItem'
import { FollowItem } from '../components/FollowItem'

const Home = () => {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
     const interval = setInterval(() => {
      addNewRandomTweets()
     }, 5000)
     return () => clearInterval(interval)
    }, )
    
    const addNewRandomTweets = () => {
      const randomTweets = [
    'Acabei de entrar no DevHub! Estou animado para me conectar com todos aqui. 👋 #NovoUsuário',
    'Mais um dia, mais uma linha de código. Continuem avançando,colegas desenvolvedores! 💻 #VidaDeCodificação',
    'Quem mais vai ficar acordado até tarde para assistir à chuva demeteoros hoje à noite? 🌠 #CéuNoturno',
    'Lembrete: seja gentil consigo mesmo e com os outros. Um poucode compaixão faz toda a diferença. ️ #Positividade',
    'Dica técnica do dia: sempre faça backup dos seus dados! Você vai agradecer a si mesmo mais tarde. 💾 #ConselhoTecnológico'
    ]
    const randomTweet = randomTweets[Math.floor(Math.random() * randomTweets.length)]
  
    addNewTweet(randomTweet, Math.random() > 0.7)
  }
  
    const addNewTweet = (content, includeImage = false) => {
      const newTweet = {
        id: v4(),
        name: "User",
        username: `user${Math.floor(Math.random() * 1000)}`,
        avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
        content,
        time: new Date().toLocaleString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        image: includeImage ? getRandomImage() : null,
        likes: 0,
        retweets: 0,
        comments: 0
      }
  
      setTweets( (prevTweets) => [newTweet, ...prevTweets])
    }

  return (
    <div className='flex mx-auto max-w-8xl'>
      <Sidebar />
      <main className='flex-grow border-l border-r border-gray-700 max-w-8xl'>
        <header className="sticky top-0 z-10 bg-[#09090A] bg-opacity-80 backdrop-blur-sm">
          <h2 className='px-04 py-3 text-xl font-bold'>Publicações</h2>
        </header>
        <TwitterForm onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}/>
        <div>
          {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet}/>
          ))}
        </div>
      </main>
      <aside className='hidden xl:block w-80 px-4'>
        <div className='sticky top-0 pt-2'>
          <div className='relative'>
            <FontAwesomeIcon icon={faSearch} className='absolute top-3 left-3 text-gray-500'/>
            <input placeholder='Buscar Publicação' className='w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4 '/>
          </div>

          <div className='bg-black rounded-xl mt-4 p-4'>
            <h2 className='font-bold text-xl mb-4'>Seja Premium</h2>
            <p className='text-gray-500 mb-4 '>Se inscreva para liberar funcionalidades exclusivas do nosso site.</p>
            <button className='bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-900 transition duration-200 cursor-pointer'>Se Inscrever</button>
          </div>
          <div className='bg-black rounded-xl mt-4 p-4'>
            <h2 className='font-bold text-xl mb-4'>Assuntos do Momento</h2>
            <TrendItem category='NFL LIVE' name="Cardinals at Bill"/>
            <TrendItem category='Sports Trending' name="Kyle Dugger"/>
            <TrendItem category='Sports Trending' name="Antony Richardson" tweetCount="13,789"/>
            <TrendItem category='Sports Trending' name="Bryce Young" tweetCount="5,431"/>
            <TrendItem category='Sports Trending' name="Daboll" tweetCount="1,342"/>
          </div>
          <div className='bg-black round-xl mt-4 p-4'> 
            <h2 className='font-bold text-xl mb-4'>O que seguir</h2>
            <FollowItem name="Bill Gates" user="BillGates"/>
            <FollowItem name="Brendan Eich" user="BrendanEich"/>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Home