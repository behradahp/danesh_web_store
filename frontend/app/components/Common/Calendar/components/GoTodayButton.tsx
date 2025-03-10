function GoTodayButton({ onClickFC }: { onClickFC: () => void }) {
  return (
    <button
      style={{
        background: "#384461",
        color: "white",
        padding: "10px 0",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      onClick={onClickFC}
    >
      برو به امروز
    </button>
  );
}

export default GoTodayButton;
