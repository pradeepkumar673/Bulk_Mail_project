<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Bulk Mail Automation — Project Overview</title>
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--accent:#06b6d4;--muted:#94a3b8;--glass:rgba(255,255,255,0.03)}
    *{box-sizing:border-box}
    body{margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;background:linear-gradient(180deg,#071024 0%, #071a2a 100%);color:#e6eef6}
    .wrap{max-width:900px;margin:40px auto;padding:28px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:14px;box-shadow:0 8px 30px rgba(2,6,23,0.6);}
    header{display:flex;align-items:center;gap:18px}
    .logo{width:64px;height:64px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#7c3aed);display:flex;align-items:center;justify-content:center;font-weight:700;color:#021023}
    h1{margin:0;font-size:1.45rem}
    p.lead{margin:8px 0 20px;color:var(--muted)}
    .grid{display:grid;grid-template-columns:1fr 320px;gap:20px}
    .card{background:var(--card);padding:18px;border-radius:10px;border:1px solid rgba(255,255,255,0.03)}
    .small{font-size:0.9rem;color:var(--muted)}
    ul{margin:8px 0 0 18px}
    .stack{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
    .pill{background:var(--glass);padding:6px 10px;border-radius:999px;font-weight:600;font-size:0.85rem;color:var(--muted);border:1px solid rgba(255,255,255,0.02)}
    a.link{display:inline-block;margin-top:10px;color:var(--accent);text-decoration:none;font-weight:600}
    .cta{display:inline-block;margin-top:14px;padding:10px 14px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#8b5cf6);color:#021023;font-weight:700;text-decoration:none}
    pre{background:#041022;padding:12px;border-radius:8px;margin:12px 0;overflow:auto;color:#bfeaf7}
    footer{margin-top:18px;color:var(--muted);font-size:0.85rem}
    @media (max-width:880px){.grid{grid-template-columns:1fr;}.logo{width:54px;height:54px}}
  </style>
</head>
<body>
  <main class="wrap">
    <header>
      <div class="logo">BM</div>
      <div>
        <h1>Bulk Mail Automation — MERN Project</h1>
        <p class="lead">A single-click web app for businesses to send bulk emails by uploading an Excel sheet, entering subject & content, and sending instantly.</p>
      </div>
    </header>

    <div class="grid" style="margin-top:18px">
      <section class="card">
        <h2 style="margin-top:0">Project Overview</h2>
        <p class="small">This is a complete, independent MERN-stack web application that parses an uploaded Excel file of employee emails, lets an admin enter the email subject and body, and dispatches bulk emails via Nodemailer on click.</p>

        <h3 style="margin-top:14px">How it works</h3>
        <ol class="small">
          <li>Admin uploads an Excel (.xlsx/.csv) file containing employee email addresses.</li>
          <li>The frontend sends the file to the Express backend, where the sheet is parsed and validated.</li>
          <li>Admin enters the Subject and Main Content in the UI.</li>
          <li>On clicking <em>Send</em>, the server iterates recipients and sends emails using Nodemailer.</li>
        </ol>

        <h3 style="margin-top:14px">Live demo</h3>
        <a class="link" href="https://bulk-mail-project-2-frontend.onrender.com/" target="_blank" rel="noopener">https://bulk-mail-project-2-frontend.onrender.com/</a>

        <h3 style="margin-top:14px">Key features</h3>
        <ul class="small">
          <li>Excel upload and parsing (bulk recipients)</li>
          <li>Subject + content input on frontend</li>
          <li>Bulk email delivery with Nodemailer and Node.js</li>
          <li>RESTful API built with Express and MongoDB persistence</li>
          <li>React-based responsive UI and client-side validation</li>
          <li>Deployed on Render for public access</li>
        </ul>

        <h3 style="margin-top:14px">Tech Stack</h3>
        <div class="stack">
          <span class="pill">MongoDB</span>
          <span class="pill">Express.js</span>
          <span class="pill">React.js</span>
          <span class="pill">Node.js</span>
          <span class="pill">Nodemailer</span>
          <span class="pill">Multer / Excel parser</span>
          <span class="pill">Render (deployment)</span>
        </div>

        <h3 style="margin-top:14px">Usage (summary)</h3>
        <p class="small">Open the app link, upload the Excel sheet with recipient emails, enter the email subject and content, then press <strong>Send</strong>. The app handles parsing, validation and delivery.</p>

        <h3 style="margin-top:14px">Notes</h3>
        <p class="small">This project is an independent end-to-end build completed in <strong>4 sleepless nights</strong>. No AI was used to write code; ChatGPT was consulted only to learn concepts and clarify doubts.</p>

      </section>

      <aside class="card">
        <h3 style="margin-top:0">Quick Links & Snippets</h3>
        <p class="small">Project link:</p>
        <a class="link" href="https://bulk-mail-project-2-frontend.onrender.com/" target="_blank" rel="noopener">Open live app</a>

        <p class="small" style="margin-top:10px">Example backend send call (conceptual):</p>
        <pre>POST /api/send
Body: { subject: string, message: string, recipients: string[] }</pre>

        <p class="small">Example frontend flow:</p>
        <pre>1. Upload file -> 2. Parse -> 3. Show recipient count -> 4. Enter subject & body -> 5. Send</pre>

        <a class="cta" href="https://bulk-mail-project-2-frontend.onrender.com/" target="_blank" rel="noopener">View Live App</a>

        <footer>
          <p>No placeholders. This file contains only details provided in the project summary.</p>
        </footer>
      </aside>
    </div>
  </main>
</body>
</html>
