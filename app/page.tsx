export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Anonymous &amp; Confidential
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          The Workplace Productivity{' '}
          <span className="text-[#58a6ff]">Reality Check</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Developers anonymously report actual vs claimed work hours. Engineering managers and HR teams get honest benchmarks — no fluff, no politics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">100%</div>
            <div className="text-xs text-[#8b949e] mt-1">Anonymous</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Real</div>
            <div className="text-xs text-[#8b949e] mt-1">Data Insights</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Teams</div>
            <div className="text-xs text-[#8b949e] mt-1">Benchmarking</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Team Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per team / month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited anonymous submissions',
              'Admin dashboard with team insights',
              'Actual vs claimed hours benchmarks',
              'CSV export for HR reporting',
              'Team-based access control',
              'Cancel anytime'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How is anonymity guaranteed?</h3>
            <p className="text-[#8b949e] text-sm">Submissions are stripped of all identifying information before storage. Managers only see aggregated team statistics — never individual entries linked to a person.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Who sees the data?</h3>
            <p className="text-[#8b949e] text-sm">Only team admins (engineering managers, HR) access the dashboard. Developers submit anonymously and never see other submissions. Data is scoped strictly per team.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your billing portal. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Work Honesty Tracker. All rights reserved.
      </footer>
    </main>
  )
}
