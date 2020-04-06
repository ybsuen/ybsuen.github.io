# -*- coding: utf-8 -*-
import scrapy


class DistrictsSpider(scrapy.Spider):
    name = 'districts'
    allowed_domains = ['en.wikipedia.org']
    start_urls = ['http://en.wikipedia.org/wiki/Districts_of_Hong_Kong']

    def parse(self, response):
        pass
