export default function Skills() {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-center">Skills</h2>
      <div className="p-6 border rounded-lg shadow-2xl bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4">
            <h3 className="text-lg font-semibold">ServiceNow</h3>
            <p>Ticketing system over 300+ ticekts</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">VPN</h3>
            <p>Worked with Palo Alto Networks Global Protect</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">OS</h3>
            <p>Windows, Mac, Linux, Mobile</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Develpoment</h3>
            <p>Python, Java, Nextjs</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Office 365</h3>
            <p>Word, Excel, PowerPoint</p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Technical Support</h3>
            <p>Over 10 years of technical/customer support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
