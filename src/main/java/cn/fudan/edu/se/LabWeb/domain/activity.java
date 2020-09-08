package cn.fudan.edu.se.LabWeb.domain;

public class activity {
    public String getACTID() {
        return ACTID;
    }

    public void setACTID(String ACTID) {
        this.ACTID = ACTID;
    }

    public String getTITLE() {
        return TITLE;
    }

    public void setTITLE(String TITLE) {
        this.TITLE = TITLE;
    }

    public String getACTDATE() {
        return ACTDATE;
    }

    public void setACTDATE(String ACTDATE) {
        this.ACTDATE = ACTDATE;
    }

    public String getTYPE() {
        return TYPE;
    }

    public void setTYPE(String TYPE) {
        this.TYPE = TYPE;
    }

    public String getCONTENT() {
        return CONTENT;
    }

    public void setCONTENT(String CONTENT) {
        this.CONTENT = CONTENT;
    }

    private String ACTID;
    private String TITLE;
    private String ACTDATE;
    private String TYPE;
    private String CONTENT;
}
