package cn.fudan.edu.se.LabWeb.domain;

import lombok.Data;

@Data
public class News {
    private String newsId;
    private String title;
    private String pubDate;
    private String content;
    private String icon;
}
