export default function ShimmerUI() {
  return (
    <>
      <div className="biodata-card">
        <h2>Biodata</h2>
        <div className="biodata-details">
          {(() => {
            const arr = [];
            for (let i = 0; i < 12; i++) {
              arr.push(
                <div className="biodata-field shimmerText">
                  <span>Last Name:Davidson</span>
                  <span>Last Name:Davidson</span>
                  <div className="travler"></div>
                </div>
              );
            }
            return arr;
          })()}
        </div>

        <div className="biodata-image img-wrap">
          <div className="imgBox"></div>
        </div>
      </div>
    </>
  );
}
