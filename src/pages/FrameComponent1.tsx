import { FunctionComponent, useState, useCallback } from "react";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
const FrameComponent1: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onAsdaResized20150223115224441ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <img className={styles.cardChild} alt="" src="/rectangle-19@2x.png" />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.vegetables}>Vegetables</div>
              <div className={styles.redish500g}>Redish 500g</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar1.svg"
                  />
                </div>
                <div className={styles.div}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.allCategories}>$2</div>
                <div className={styles.div2}>$3.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.div}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card1}>
          <img
            className={styles.cardChild}
            alt=""
            src="/rectangle-191@2x.png"
          />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.vegetables}>Vegetables</div>
              <div className={styles.redish500g}>Potatos 1kg</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar1.svg"
                  />
                </div>
                <div className={styles.div}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.allCategories}>$1</div>
                <div className={styles.div2}>$1.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.div}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <img
            className={styles.cardChild}
            alt=""
            src="/rectangle-192@2x.png"
          />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.vegetables}>Fruits</div>
              <div className={styles.redish500g}>Tomatos 200g</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar1.svg"
                  />
                </div>
                <div className={styles.div}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.allCategories}>$0.30</div>
                <div className={styles.div2}>$0.99</div>
              </div>
              <div className={styles.cartBtn}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.div}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card3}>
          <img
            className={styles.cardChild}
            alt=""
            src="/rectangle-193@2x.png"
          />
          <div className={styles.cardInfo}>
            <div className={styles.info}>
              <div className={styles.vegetables}>Vegetables</div>
              <div className={styles.redish500g}>Broccoli 1kg</div>
            </div>
            <div className={styles.ratingParent}>
              <div className={styles.rating}>
                <div className={styles.iconlyboldstarParent}>
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar.svg"
                  />
                  <img
                    className={styles.iconlyboldstar}
                    alt=""
                    src="/iconlyboldstar1.svg"
                  />
                </div>
                <div className={styles.div}>(4)</div>
              </div>
              <div className={styles.seller}>
                <span>{`By `}</span>
                <span className={styles.mrfood}>Mr.food</span>
              </div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>
                <div className={styles.allCategories}>$1.50</div>
                <div className={styles.div2}>$2.99</div>
              </div>
              <div className={styles.cartBtn3} onClick={openFrame}>
                <img
                  className={styles.lishoppingCartIcon}
                  alt=""
                  src="/lishoppingcart.svg"
                />
                <div className={styles.div}>{`Add `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.topbar}>
          <img
            className={styles.asdaresized20150223115224441Icon}
            alt=""
            src="/asdaresized20150223115224441-1@2x.png"
            onClick={onAsdaResized20150223115224441ImageClick}
          />
          <div className={styles.searchbar}>
            <div className={styles.search}>
              <div className={styles.allCategoriesParent}>
                <div className={styles.allCategories}>All Categories</div>
                <img
                  className={styles.lichevronDownIcon}
                  alt=""
                  src="/lichevrondown.svg"
                />
              </div>
              <div className={styles.vectorParent}>
                <img className={styles.frameChild} alt="" src="/vector-1.svg" />
                <div className={styles.div}>Search for items...</div>
              </div>
            </div>
            <div className={styles.searchBtn}>
              <img className={styles.lisearchIcon} alt="" src="/lisearch.svg" />
            </div>
          </div>
          <div className={styles.wishlistParent}>
            <div className={styles.wishlist}>
              <img className={styles.lisearchIcon} alt="" src="/liheart.svg" />
              <div className={styles.div}>Favorites</div>
            </div>
            <div className={styles.cart}>
              <div className={styles.lishoppingCartParent}>
                <img
                  className={styles.lishoppingCartIcon4}
                  alt=""
                  src="/lishoppingcart1.svg"
                />
                <div className={styles.frameItem} />
                <div className={styles.div12}>1</div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.myCartParent}>
                  <div className={styles.div}>My cart</div>
                  <div className={styles.div13}>$0</div>
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
            <img
              className={styles.profileChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.allCategories}>James James</div>
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
              className={styles.lisearchIcon}
              alt=""
              src="/lilayoutgrid.svg"
            />
            <div className={styles.allCategories}>Browse All Categories</div>
          </div>
          <div className={styles.navLinks}>
            <div className={styles.frameGroup}>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
              <div className={styles.div}>Electronics</div>
            </div>
            <div className={styles.hotDeals1Parent}>
              <img className={styles.hotDeals1} alt="" src="/hot-deals-1.svg" />
              <div className={styles.div}>Hot deals</div>
            </div>
            <div className={styles.hotDeals1Parent}>
              <img className={styles.frameIcon} alt="" src="/lipercent.svg" />
              <div className={styles.div}>ASDA Rewards</div>
            </div>
            <div className={styles.hotDeals1Parent}>
              <img className={styles.frameIcon} alt="" src="/limegaphone.svg" />
              <div className={styles.div}>New products</div>
            </div>
          </div>
          <div className={styles.support}>
            <b className={styles.vegetables}>Accessibility Modes</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameComponent1;
