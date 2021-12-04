package cn.fudan.edu.se.LabWeb.domain;

import lombok.Data;

@Data
public class Paper {
    private String name;
    private String year;
    private String Abstract;
    private String authors;
    private String source;
    private String fileName;
}
