import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'reflect-metadata';
import { ListEntity } from '../src/entities/ListEntity';
import { Sequelize } from 'sequelize-typescript';

export default class MyDocument extends Document {
    static async getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()

        let name = 'init'

        const sequelize =  new Sequelize({
            dialect: 'mysql',
            host: '127.0.0.1',
            database: 'next',
            username: 'next',
            password: 'next',
        });
        sequelize.addModels([ListEntity]);

        await sequelize.authenticate().catch(console.error)
        console.log('接続した')

        // TypeError: Class constructor Model cannot be invoked without 'new'
        const list = await ListEntity.findByPrimary(1).catch(console.log)
        console.log(list)

        return { ...page, styleTags, name }
    }

    render () {
        return (
            <html lang="ja">
                <Head>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
                    <title>My page</title>
                    <style>{`
                        html, body, h1 { margin: 0; padding: 0; }
                    `}</style>
                    {this.props.styleTags}
                </Head>
                <body>
                    {this.props.name}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
