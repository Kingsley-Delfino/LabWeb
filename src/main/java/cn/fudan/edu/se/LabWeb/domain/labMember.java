package cn.fudan.edu.se.LabWeb.domain;

public class labMember {
    private String NAME;
    private String GRADE;
    private String DESCP;
    private String DWNAME;
    private String EMAIL;
    private String USERTYPE;
    private char STATE;
    private String HOMEPAGE;
    private String GTYPE;

    public String getGTYPE() {
        return GTYPE;
    }

    public void setGTYPE(String GTYPE) {
        this.GTYPE = GTYPE;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getGRADE() {
        return GRADE;
    }

    public void setGRADE(String GRADE) {
        this.GRADE = GRADE;
    }

    public String getDESCP() {
        return DESCP;
    }

    public void setDESCP(String DESCP) {
        this.DESCP = DESCP;
    }

    public String getDWNAME() {
        return DWNAME;
    }

    public void setDWNAME(String DWNAME) {
        this.DWNAME = DWNAME;
    }

    public String getEMAIL() {
        return EMAIL;
    }

    public void setEMAIL(String EMAIL) {
        this.EMAIL = EMAIL;
    }

    public String getUSERTYPE() {
        return USERTYPE;
    }

    public void setUSERTYPE(String USERTYPE) {
        this.USERTYPE = USERTYPE;
    }

    public char getSTATE() {
        return STATE;
    }

    public void setSTATE(char STATE) {
        this.STATE = STATE;
    }

    public String getHOMEPAGE() {
        return HOMEPAGE;
    }

    public void setHOMEPAGE(String HOMEPAGE) {
        this.HOMEPAGE = HOMEPAGE;
    }
}
