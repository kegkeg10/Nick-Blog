import Posts from "./components/Posts"


export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-black">
        Hello and Welcome 💻 &nbsp;
        <span>
          Im <span className="font-bold">Nicholas 🪪</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
