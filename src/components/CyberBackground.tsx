const CyberBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="cyber-grid absolute inset-0" />
      <div className="cyber-scanline absolute inset-0" />
      <div className="cyber-depth absolute inset-0" />
      <div className="cyber-beam absolute inset-y-0 left-1/2 w-px" />
    </div>
  );
};

export default CyberBackground;
