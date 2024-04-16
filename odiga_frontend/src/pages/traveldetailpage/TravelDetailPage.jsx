import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.body`
    margin: 0;
    padding: 0;
    text-align: center;
    color: #333;
`;

const Header = styled.header`
    background-color: #007bff;
    color: #fff;
    padding: 20px;
    text-align: center;
`;

const Main = styled.main`
    padding: 20px;
`;

const Section = styled.section`
    position: relative;
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 70%; 
`;

const H2 = styled.h2`
    margin-bottom: 10px;
`;

const Tag = styled.span`
    display: inline-block;
    background-color: #e7f5ff;
    color: #333;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 5px;
    font-size: 14px;
`;

const InputText = styled.input`
    width: 70%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-align: left;
    vertical-align: top;
`;

function TravelDetailPage() {
    const [likes, setLikes] = useState(0);

    return (
        <Container>
            <Header>
                <h1>여행지 상세 정보</h1>
            </Header>

            <Main>
                <LikeButton likes={likes} setLikes={setLikes} />
                <Section id="travel-name">
                    <H2>여행지 이름</H2>
                    <p id="name-placeholder">벛꽃 축제.</p>
                </Section>

                <Section id="map-location">
                    <H2>지도 위치</H2>
                    <div id="map-placeholder">
                        <img src="https://spi.maps.daum.net/map2/map/imageservice?IW=600&IH=350&MX=400205&MY=-11702&SCALE=2.5&service=open" alt="" />
                    </div>
                </Section>

                <Section id="detail-info">
                    <H2>상세 정보</H2>
                    <p id="detail-placeholder">이 축제는 저시깽 모시깽 이러이러 한 벛꽃축제입니다.</p>
                </Section>

                <Section id="tag-list">
                    <H2>태그 목록</H2>
                    <div id="tag-list-placeholder">
                        <Tag>#벛꽃</Tag>
                        <Tag>#축제</Tag>
                        <Tag>#가고싶다</Tag>
                    </div>
                </Section>

                <Section id="similar-destinations">
                    <H2>비슷한 여행지 추천 목록</H2>
                    <div id="similar-destinations-placeholder">
                        <img src="https://a.cdn-hotels.com/gdcs/production75/d1444/e66988b1-f783-4e8f-a7ea-8c5eebe88436.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="비슷한 여행지 사진 1" />
                        <img src="https://image.ajunews.com/content/image/2020/10/29/20201029110919207531.jpg" alt="비슷한 여행지 사진 2" />
                        <img src="https://img.freepik.com/free-photo/woman-traveler-with-backpack-walking-in-row-of-yellow-ginkgo-tree-in-autumn-autumn-park-in-tokyo-japan_335224-178.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1712102400&semt=ais" alt="비슷한 여행지 사진 3" />
                    </div>
                </Section>

                <Section id="reviews">
                    <H2>후기와 별점 매기기</H2>
                    <div id="reviews-placeholder">
                        <InputText type="text" />
                        <div className="rating">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9734;</span>
                        </div>
                        <button>submit</button>
                    </div>
                </Section>

                <Section id="review-display">
                    <H2>리뷰</H2>
                    <div id="review-display-placeholder">
                        <h3>reviews</h3>
                    </div>
                </Section>
            </Main>
        </Container>
    );
}

function LikeButton({ likes, setLikes }) {
    return (
        <Section id="action-bar">
            <div id="count-container">
                <img src="view-icon.png" alt="icon" />
                <span id="view-count">조회수: 100</span>
                <img src="like-icon.png" alt="icon" />
                <span id="like-count">좋아요: {likes}</span>
            </div>
            <button id="like-button" onClick={() => setLikes(likes + 1)}>
                좋아요
            </button>
        </Section>
    );
}

export default TravelDetailPage;
