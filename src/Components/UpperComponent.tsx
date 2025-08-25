interface Props {
    mode: boolean;
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function UpperComponent({mode, setMode}: Props) {
  
  return (
    <div className={`div-upper-component ${mode === true ? "dark-mode": ""} d-flex justify-content-between align-items-center px-3 py-4 py-lg-3 px-lg-5`}>
        <h1 className="fs-3 fw-bold m-0">Where in the world?</h1>
        <button type="button" className={`btn-change-mode ${mode === true ? "dark-mode": ""} p-0`} onClick={() => setMode(!mode)}>{mode === true ? <><i className="bi bi-moon me-2"></i>Dark mode</> : <><i className="bi bi-sun me-2"></i>Light mode</>}</button>
    </div>
  )
}

export default UpperComponent
