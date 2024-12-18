import Layout from '../../components/Layout'
import siteConfig from '../../config/siteConfig'

export default function Contact() {
  return (
    <Layout
      title="Always pick #1 first"
      description="You have less time than you think. Always pick a proven winner first!"
      canonicalUrl={`${siteConfig.siteUrl}/blog/always-pick-number-one-first`}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-xl font-bold mb-4">Always pick #1 first</h2>

        <div className="space-y-4">
          <p>Imagine starting your next side project on a Saturday morning. You have a cup of coffee in hand, some music or background noise is on, and your terminal shell is ready to go. You have been hearing about these four frameworks that seem like potential contenders:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Framework 1: maintained by a FAANG/MANGA company. It is well-documented, widely used, and has a good selection of plugins and extensions. There are some performance issues when you try to do certain things, and some leading engineers are very vocal about just how much they despise this framework.</li>

            <li>Framework 2: maintained by a company widely-known in the tech industry. It is also well documented, although not quite as widely used as Framework 1. Also doesn&apos;t have the performance issues of Framework 1 because of the way the internals are written. Some of the leading engineers who despise Framework 1 use this instead.</li>

            <li>Framework 3: similar to Framework 2, but uses a different coding paradigm. Has a lot of contributors on GitHub, but not backed by any major companies.</li>

            <li>Framework 4: works almost exactly like Framework 1, but is not one-to-one compatible. Started by a group of engineers who are opposed to the ethics of the company behind Framework 1. Documentation is fine, although still WIP.</li>
          </ul>

          <p>Even though you have not used any frameworks like these before, you are certain that something like Framework 1 is what you need for this project. But given the negative things you have heard about Framework 1, you start with Framework 4. After 45 minutes, you still have not gotten past the todo list example in any meaningful way.</p>

          <p>You are not familiar with the paradigm of Framework 3, so you move on to Framework 2. By the time you start making headway with Framework 2, it is late afternoon. You have some early evening plans with friends, so you close up the laptop and get ready to head out.</p>

          <p>When you pick up the project later on, you try to tackle this feature that all of the apps built with Framework 1 seem to have. This is the one feature Framework 2 does not seem to support out of the box, so you start finding blog posts and discussions about why this is. After learning about your different options, you pick the one that seems to be the least complicated, implement it, and then continue on with your project.</p>

          <p>Six months later, you are in an interview and you bring up this side project as an example of why you would be a great fit. The interviewer begins to dig into this project and ask you some pointed questions about why you ended up picking Framework 2 instead of Framework 1. You start talking about why you avoided Framework 1 and your path to Framework 2. The interviewer digs further, asking about the technical merits of Framework 1 vs 2. You are getting nervous and now talking mainly about what you have heard about Framework 1.</p>

          <p>Unfortunately, the company winds up passing on you because despite your hands-on experience with Framework 2, they are really looking for someone who can hit the ground running with Framework 1.</p>

          <p>Is this unfair? Is the company being short-sighted? Possibly.</p>

          <p>If you have demonstrated competency with Framework 2, it is likely you could pick up Framework 1 fairly quickly. But you are always going to be behind the people who already have the experience in Framework 1. They will have more experience to show on their resume and will always get picked over you.</p>

          <p>This is why you should always start with the most popular and well-documented software first, then work your way down to investing in other options.</p>

          <p>Consider another scenario: you are in another interview, but you picked Framework 1 for your project. You are able to demonstrate your expertise with it and can confidently talk about how to avoid the pitfalls around it. The company you are interviewing at uses Framework 3, but knows that only 10% of engineers out there have any sort of experience with it. They are more than willing to hire you because you can speak to your experience with Framework 1 very confidently. With this, they know you can pick up Framework 3 quickly.</p>

          <p>Your side project time is limited. Do not waste it on technology that will not yield a return. Always pick #1 first.</p>
        </div>
      </div>
    </Layout>
  )
}