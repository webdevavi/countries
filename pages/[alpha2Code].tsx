import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { Card } from "../components/Card";
import { CardTitle } from "../components/CardTitle";
import { Navbar } from "../components/Navbar";
import { Screen } from "../components/Screen";
import { Stat } from "../components/Stat";
import { ExtendedCountry } from "../models/country/extendedCountry";
import { getAllCountryCodes } from "../utils/getAllCountryCodes";
import { getCountry } from "../utils/getCountry";

interface CountryPageProps {
  country: ExtendedCountry;
}

const CountryPage: NextPage<CountryPageProps> = function ({ country }) {
  const title = `${country.name} - ${country.alpha2Code}`;
  const description = `Basic informations about the country ${country.name}`;
  const url = `https://countries-snowy.vercel.app/${country.alpha2Code}`;
  const image = country.flag;
  const { ref, inView } = useInView({ threshold: 0.9 });

  return (
    <Screen>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={image} type="image/svg" />

        {/** meta tags for open graph */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/** meta tags for twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="devavi26" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:image:alt" content={title} />
      </Head>
      <Navbar title={title} img={!inView && country.flag} />
      <section className="p-4 pt-20">
        <img
          ref={ref}
          src={country.flag}
          alt={country.name}
          title={`National flag of ${country.name}`}
          className="max-w-full sm:max-w-sm m-auto shadow-2xl transform hover:scale-105 animate-fade-in"
        />
        <div className="flex justify-around items-stretch flex-wrap gap-4 px-2 py-8 sm:px-8">
          {country.nativeName && (
            <Card title={`Native name of ${country.name}`}>
              <CardTitle title="Native Name" />
              <Stat stat={country.nativeName} />
            </Card>
          )}
          {country.capital && (
            <Card title={`Capital of ${country.name}`}>
              <CardTitle title="Captial" />
              <Stat stat={country.capital} />
            </Card>
          )}
          {country.population ? (
            <Card title={`Population in ${country.name}`}>
              <CardTitle title="Population" />
              <Stat stat={new Intl.NumberFormat().format(country.population)} />
            </Card>
          ) : (
            <></>
          )}
          {country.languages && country.languages.length > 0 && (
            <Card title={`Languages spoken in ${country.name}`}>
              <CardTitle title="Languages" />
              <Stat
                stat={country.languages
                  .map(
                    ({ name, nativeName }) =>
                      `${name} ${nativeName !== name ? `(${nativeName})` : ""}`
                  )
                  .join(", ")}
              />
            </Card>
          )}
          {country.currencies && country.currencies.length > 0 && (
            <Card title={`Currencies valid in ${country.name}`}>
              <CardTitle title="Currencies" />
              <Stat
                stat={country.currencies
                  .map(
                    ({ code, name, symbol }) => `${code} - ${name} (${symbol})`
                  )
                  .join(", ")}
              />
            </Card>
          )}
          {country.region && (
            <Card title={`Region ${country.name} lies in`}>
              <CardTitle title="Region" />
              <Stat stat={country.region} />
            </Card>
          )}
          {country.subregion && (
            <Card title={`Sub - Region ${country.name} lies in`}>
              <CardTitle title="Sub - Region" />
              <Stat stat={country.subregion} />
            </Card>
          )}
          {country.altSpellings && country.altSpellings.length > 0 && (
            <Card title={`Alternative spellings of ${country.name}`}>
              <CardTitle title="Alternative Spellings" />
              <Stat stat={country.altSpellings.join(", ")} />
            </Card>
          )}
          {country.timezones && country.timezones.length > 0 && (
            <Card title={`Timezones in ${country.name}`}>
              <CardTitle title="Timezones" />
              <Stat stat={country.timezones.join(", ")} />
            </Card>
          )}
        </div>
      </section>
    </Screen>
  );
};

export const getStaticPaths: GetStaticPaths = async function (): Promise<GetStaticPathsResult> {
  const countryCodes = await getAllCountryCodes();

  return {
    paths: countryCodes.map(({ alpha2Code }) => ({
      params: { alpha2Code },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CountryPageProps> = async ({
  params,
}): Promise<GetStaticPropsResult<CountryPageProps>> => {
  const country = await getCountry(params.alpha2Code.toString());

  return {
    props: { country },
  };
};

export default CountryPage;
