package cn.fudan.edu.se.LabWeb.domain;

import lombok.Data;

@Data
public class LabMember {
    private String name;
    private String grade;
    private String research;
    private String type;
    private String isPhoto;
    private String picture;
}