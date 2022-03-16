const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const getCoupon = (e) => {
    // e.preventDefault();
    alert("10% 할인 쿠폰이 당첨 되었습니다!");
  };

  const closeBanner = (e) => {
    setIsVisible(false);
    // setIsVisible(false) 되는순간 -> getCoupon 실행됨.

    // solution: stopPropagation()
    // -> 상위 event 검색을 막아줌. -> getCoupon 실행이 안됨.
    e.stopPropagation();
  };

  return (
    <div
      className="banner"
      onClick={getCoupon}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button className="close-btn" onClick={closeBanner}>
        닫기
      </button>
    </div>
  );
};

export default Banner;
