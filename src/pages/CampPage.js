import React from "react";
import { PageCamp } from "../components/index";

class CampPage extends React.Component {
  render() {

    return (
<<<<<<< HEAD
      <Layout
        style={{
          width: "100%",
          fontFamily: "Roboto",
          position: "fixed",
          overflow: "hidden",
          display: "block",
        }}
      >
        <div
          style={{
            width: "100%",
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <div
            style={{
              height: "70px",
              paddingTop: 15,
              paddingLeft: 30,
              borderBottom: "1px solid var(--colors-border)",
            }}
          >
          <Row>
            <Col>
              <Title level={3} id="camptitle" style={{ margin: 0, padding: 0 }}>
                CAMP | Make an application for the pandemic COVID 19 situation!
              </Title>
              {/* <p>this is the camp about the </p> */}
            </Col>
            <Col>
              <Button type="primary" style={{float: "right", marginLeft: 10}}>
              <Link to={"/uploadproject"} style={{fontSize: 18}}>SUBMIT your project!</Link>
              </Button>
            </Col>
          </Row>
          </div>

          <Layout>
            <div className="sidenav left">
              <div className="white_sidenav">
                <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item
                    key="1"
                    icon={<HomeOutlined />}
                    onClick={this.handleClick}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={<QuestionCircleOutlined />}
                    onClick={this.handleClick}
                  >
                    QnA Board
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    icon={<BarChartOutlined />}
                    onClick={this.handleClick}
                  >
                    Ranking
                  </Menu.Item>
                </Menu>

                <div className="forestBox" style={{margin:"10px"}}>
                  <h6 style={{ margin: "10px" }}>Hackathon Forest</h6>
                  <p className="peoplenum">{this.state.num_p} participants are growing forest together!</p>
                  <List
                    locale={{emptyText: 'No participants yet!'}}
                    style={{
                      backgroundColor: "#beedb2",
                      borderRadius: 10,
                      overflowY: "scroll",
                      height:"300px"
                    }}
                    grid={{ gutter: 16 }}
                    dataSource={this.state.forest}
                    renderItem={(item) => (
                      <div className="treeicon" style={{ 
                        margin: "5px",
                      }}
                      >
                        <Link className="treelink" to={"/mypage/"+item.id}>
                        <img
                          src={getTree(item.data().point)}
                          style={{
                            width: "50px",
                            height: "50px",
                            margin: "5px",
                          }}
                        />
                        <div
                          style={{
                            marginBotton: "5px",
                            fontSize: "13px",
                            textAlign: "center",
                            color: "#000"
                          }}
                        >
                          {item.id}
                        </div>
                        </Link>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>

            <Layout
              style={{
                marginLeft: 300,
                marginRight: 300,
                overflow: "auto",
                height: "100vh",
                width: "match-parent",
              }}
            >
              <CampTabView tabnum={this.state.tab}></CampTabView>
            </Layout>

            <div></div>

            <div className="sidenav right">
              <div
                className="timeleftbox shadowbox"
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  margin: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingBottom: "10px",
                }}
              >
                <h6>Time left</h6>
                <Countdown
                  style={{ margin: "10px" }}
                  value={this.state.timer}
                  format="Dday H:m:s"
                />
              </div>
              <WGO wgo={this.state.whatsgoingon} />
            </div>
          </Layout>
        </div>
      </Layout>
=======
      <PageCamp
      tab={this.props.location.pathname.split("/")[2]}></PageCamp>
>>>>>>> master
    );
  }
}

export default CampPage;
