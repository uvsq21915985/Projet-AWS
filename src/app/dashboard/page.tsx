import './page.css'

export default function Dashboard() {
  return (
    <div>
        <div className="card-stat">
          <div className="stat">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2a1 1 0 0 0-1 1v2h2V4h14v16H5v-1H3v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm5 14a3 3 0 1 1 6 0zm3-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4M6 9V7H2v2zm0 2v2H2v-2zm0 6v-2H2v2z"/></svg>
            </div>
            <div>
              <h2>Total reunions</h2>
              <p>0</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-7h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0m1-2a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg>
            </div>
            <div>
              <h2>Reunions organisés</h2>
              <p>0</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10c0 .727-.078 1.435-.225 2.118l-1.782-1.783Q20 12.17 20 12a8 8 0 1 0-4.381 7.137q.232.37.553.691c.302.303.64.547 1.001.732A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17s-1.965.183-2.755.496l-.945-.86A5 5 0 0 1 12 15m-3.5-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/></svg>
            </div>
            <div>
              <h2>Reunions manqués</h2>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className="dash-content">
            <h1>Dashboard</h1>
            <p>Lorem ipsum dollor sit amet Lorem ipsum dollor sit amet Lorem ipsum dollor sit amet.</p>
        </div>
    </div>
  );
}
