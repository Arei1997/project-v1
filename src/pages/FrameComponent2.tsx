import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";
const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/frame-93");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.peachParent}>
          <div className={styles.peach}>Peach</div>
          <div className={styles.items}>20 Items</div>
        </div>
      </div>
      <div className={styles.exploreCategories}>Explore Categories</div>
      <div className={styles.right}>
        <img
          className={styles.liarrowRightIcon}
          alt=""
          src="/liarrowright.svg"
        />
      </div>
      <div className={styles.left}>
        <img
          className={styles.liarrowRightIcon}
          alt=""
          src="/liarrowright1.svg"
        />
      </div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.image4Parent} onClick={onFrameContainer3Click}>
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <div className={styles.peachParent}>
          <div className={styles.peach}>Vegetables</div>
          <div className={styles.items}>220 Items</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.peachParent}>
          <div className={styles.peach}>strawberry</div>
          <div className={styles.items}>10 Items</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.peachParent}>
          <div className={styles.peach}>Apple</div>
          <div className={styles.items}>40 Items</div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.peachParent}>
          <div className={styles.peach}>Orange</div>
          <div className={styles.items}>23 Items</div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.peachParent}>
          <div className={styles.peach}>Potato</div>
          <div className={styles.items}>3 Items</div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.peachParent}>
          <div className={styles.peach}>Carrot</div>
          <div className={styles.items}>9 Items</div>
        </div>
      </div>
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <div className={styles.tapbar}>
        <b className={styles.all}>All</b>
        <div className={styles.fruits}>Vegetables</div>
        <div className={styles.fruits}>Fruits</div>
        <div className={styles.fruits}>{`Coffe & teas`}</div>
        <div className={styles.fruits}>Meat</div>
      </div>
      <img className={styles.frameChild} alt="" src="/rectangle-13@2x.png" />
      <img className={styles.frameItem} alt="" src="/rectangle-13@2x.png" />
      <div className={styles.offer2}>
        <div className={styles.frameGroup}>
          <div className={styles.frameParent1}>
            <div className={styles.offWrapper}>
              <div className={styles.off}>90% off</div>
            </div>
            <div className={styles.organicFoodParent}>
              <div className={styles.peach}>Organic Food</div>
              <div className={styles.saveUpTo}>
                Save up to 90% off on your first order
              </div>
            </div>
          </div>
          <div className={styles.shopBtn}>
            <div className={styles.peach}>Order Now</div>
            <img
              className={styles.lichevronDownIcon}
              alt=""
              src="/liarrowright2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.offer1}>
        <div className={styles.frameGroup}>
          <div className={styles.frameParent3}>
            <div className={styles.freeDeliveryWrapper}>
              <div className={styles.off}>Free delivery</div>
            </div>
            <div className={styles.organicFoodParent}>
              <div className={styles.peach}>{`Free delivery over £50 `}</div>
              <div className={styles.saveUpTo}>
                Shop over £50 and get free delivery.
              </div>
            </div>
          </div>
          <div className={styles.shopBtn}>
            <div className={styles.peach}>Shop Now</div>
            <img
              className={styles.lichevronDownIcon}
              alt=""
              src="/liarrowright2.svg"
            />
          </div>
        </div>
      </div>
      <img className={styles.offer2ImgIcon} alt="" src="/offer2img@2x.png" />
      <img className={styles.offer1ImgIcon} alt="" src="/offer1img@2x.png" />
      <div className={styles.topbar}>
        <img
          className={styles.asdaresized20150223115224441Icon}
          alt=""
          src="/asdaresized20150223115224441-1@2x.png"
        />
        <div className={styles.searchbar}>
          <div className={styles.search}>
            <div className={styles.allCategoriesParent}>
              <div className={styles.peach}>All Categories</div>
              <img
                className={styles.lichevronDownIcon}
                alt=""
                src="/lichevrondown.svg"
              />
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.frameInner} alt="" src="/vector-1.svg" />
              <div className={styles.fruits}>Search for items...</div>
            </div>
          </div>
          <div className={styles.searchBtn}>
            <img
              className={styles.liarrowRightIcon}
              alt=""
              src="/lisearch1.svg"
            />
          </div>
        </div>
        <div className={styles.wishlistParent}>
          <div className={styles.wishlist}>
            <img
              className={styles.liarrowRightIcon}
              alt=""
              src="/liheart1.svg"
            />
            <div className={styles.fruits}>Favorites</div>
          </div>
          <div className={styles.cart}>
            <div className={styles.lishoppingCartParent}>
              <img
                className={styles.lishoppingCartIcon}
                alt=""
                src="/lishoppingcart1.svg"
              />
              <div className={styles.groupChild} />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.myCartParent}>
                <div className={styles.fruits}>My cart</div>
                <div className={styles.div1}>$0</div>
              </div>
              <img
                className={styles.lichevronDownIcon}
                alt=""
                src="/lichevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <img className={styles.profileChild} alt="" src="/ellipse-2@2x.png" />
          <div className={styles.peach}>James James</div>
          <img
            className={styles.lichevronDownIcon}
            alt=""
            src="/lichevrondown1.svg"
          />
        </div>
      </div>
      <div className={styles.topbar1}>
        <div className={styles.categoriesBtn}>
          <img
            className={styles.liarrowRightIcon}
            alt=""
            src="/lilayoutgrid.svg"
          />
          <div className={styles.peach}>Browse All Categories</div>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.frameParent5}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <div className={styles.fruits}>Electronics</div>
          </div>
          <div className={styles.hotDeals1Parent}>
            <img className={styles.hotDeals1} alt="" src="/hot-deals-1.svg" />
            <div className={styles.fruits}>Hot deals</div>
          </div>
          <div className={styles.hotDeals1Parent}>
            <img className={styles.frameIcon} alt="" src="/lipercent1.svg" />
            <div className={styles.fruits}>ASDA Rewards</div>
          </div>
          <div className={styles.hotDeals1Parent}>
            <img className={styles.frameIcon} alt="" src="/limegaphone1.svg" />
            <div className={styles.fruits}>New products</div>
          </div>
        </div>
        <div className={styles.support}>
          <b className={styles.accessibilityModes}>Accessibility Modes</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
