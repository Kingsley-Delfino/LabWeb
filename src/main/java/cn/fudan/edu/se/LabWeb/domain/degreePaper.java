package cn.fudan.edu.se.LabWeb.domain;

public class degreePaper {
    private int ORD;
    private String NAME;
    private String KEY;
    private String YEAR;

    public int getORD() {
        return ORD;
    }

    public void setORD(int ORD) {
        this.ORD = ORD;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getKEY() {
        return KEY;
    }

    public void setKEY(String KEY) {
        this.KEY = KEY;
    }

    public String getYEAR() {
        return YEAR;
    }

    public void setYEAR(String YEAR) {
        this.YEAR = YEAR;
    }

    public String getABSTRACT() {
        return ABSTRACT;
    }

    public void setABSTRACT(String ABSTRACT) {
        this.ABSTRACT = ABSTRACT;
    }

    public String getAUTHORS() {
        return AUTHORS;
    }

    public void setAUTHORS(String AUTHORS) {
        this.AUTHORS = AUTHORS;
    }

    public String getDEGREE() {
        return DEGREE;
    }

    public void setDEGREE(String DEGREE) {
        this.DEGREE = DEGREE;
    }

    public String getFILENAME() {
        return FILENAME;
    }

    public void setFILENAME(String FILENAME) {
        this.FILENAME = FILENAME;
    }

    private String ABSTRACT;
    private String AUTHORS;
    private String DEGREE;
    private String FILENAME;

}
