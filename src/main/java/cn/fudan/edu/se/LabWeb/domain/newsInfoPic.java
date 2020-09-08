package cn.fudan.edu.se.LabWeb.domain;

public class newsInfoPic {
    private String NEWSID;
    private String PICID;
    private String DESCP;
    private String FILENAME;

    public String getNEWSID() {
        return NEWSID;
    }

    public void setNEWSID(String NEWSID) {
        this.NEWSID = NEWSID;
    }

    public String getPICID() {
        return PICID;
    }

    public void setPICID(String PICID) {
        this.PICID = PICID;
    }

    public String getDESCP() {
        return DESCP;
    }

    public void setDESCP(String DESCP) {
        this.DESCP = DESCP;
    }

    public String getFILENAME() {
        return FILENAME;
    }

    public void setFILENAME(String FILENAME) {
        this.FILENAME = FILENAME;
    }
}
