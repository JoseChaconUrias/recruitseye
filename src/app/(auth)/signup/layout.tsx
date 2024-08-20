const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="flex flex-row">
        <section className="w-2/3">
            <h1>hello</h1>
        </section>
        <section>
            {children}
        </section>

    </main>
  )
}

export default layout