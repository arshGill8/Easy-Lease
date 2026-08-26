import NextButton from "../common/NextButton";
import BackButton from "../common/BackButton";
import { Name } from "../features/name";
import { RentalUnit } from "../features/rentalUnit";
import { ContactInfo } from "../features/contactInfo";
import { TermTenancy } from "../features/termTenancy";
import { UtilityInfo } from "../features/utilityInfo";
import { DepositInfo } from "../features/depositInfo";
import { Signature } from "../features/signature";
import { ThankYou } from "../features/thankYou";
import { useSelector } from "react-redux";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/400.css";
import "../index.css";

const steps = ["People", "Rental unit", "Contact", "Tenancy & rent", "Deposits & terms", "Utilities", "Signatures"];

export default function App() {
  const currentPage = useSelector((state) => state.currentPage.value);
  const pages = { 1: <Name />, 2: <RentalUnit />, 3: <ContactInfo />, 4: <TermTenancy />, 5: <DepositInfo />, 6: <UtilityInfo />, 7: <Signature />, 8: <ThankYou /> };
  const isComplete = currentPage === 8;
  const progress = Math.min((currentPage / steps.length) * 100, 100);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Easy Lease home"><span className="brand-mark" aria-hidden="true">EL</span><span>Easy Lease</span></a>
        <span className="jurisdiction">Ontario standard lease</span>
      </header>
      <main className="wizard-layout">
        {!isComplete && <aside className="step-sidebar" aria-label="Lease form progress">
          <p className="eyebrow">Your progress</p>
          <ol className="step-list">{steps.map((step, index) => {
            const number = index + 1;
            const state = number === currentPage ? "active" : number < currentPage ? "done" : "upcoming";
            return <li className={`step-item ${state}`} key={step} aria-current={state === "active" ? "step" : undefined}><span className="step-dot">{state === "done" ? "✓" : number}</span><span>{step}</span></li>;
          })}</ol>
          <div className="privacy-note"><span aria-hidden="true">◇</span><p><strong>Your work stays private.</strong><br />Information is only used to prepare your lease.</p></div>
        </aside>}
        <section className={`form-card ${isComplete ? "completion-card" : ""}`}>
          {!isComplete && <div className="mobile-progress"><div className="progress-copy"><span>Step {currentPage} of {steps.length}</span><span>{steps[currentPage - 1]}</span></div><div className="progress-track" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div></div>}
          <div className="form-content">{pages[currentPage] || null}</div>
          {!isComplete && <footer className="form-actions">{currentPage > 1 ? <BackButton /> : <span />}<NextButton /></footer>}
        </section>
      </main>
      <footer className="site-footer"><span>Easy Lease Ontario</span><span>Built to help you prepare Ontario&apos;s standard lease.</span></footer>
    </div>
  );
}
