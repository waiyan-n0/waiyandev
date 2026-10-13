import UniLogo from './../assets/Logo_ucstgo.png';
import MittaLogo from './../assets/mitta.png';
import { useTranslation } from "react-i18next";
import Reveal from '../components/Reveal.jsx'



const Education = () => {
    const { t } = useTranslation();

    return (
        <Reveal>
            <section className='p-6 md:px-16 max-w-7xl mx-auto scroll-mt-24' id='education'>
                <h1 className='text-xl font-bold border-b-2 border-blue-500 w-fit mb-4'>
                    {t('education.title')}
                </h1>
                <div className='flex items-center gap-4 group mb-3 px-2 pb-2 rounded-xl dark:border-slate-800 bg-white dark:bg-slate-900/30 shadow-lg transition-shadow duration-300 cursor-pointer font-[MighaBold] tracking-wider'>
                    <div className='flex-shrink-0 flex items-center justify-center'>
                        <img src={MittaLogo} alt='logo-mitta'
                             className='w-16 md:w-20 md:h-20 object-contain mt-4'
                        />
                    </div>
                    <div className='flex md:flex-row justify-between w-full gap-2'>
                        <div className='space-y-1'>
                            <h3 className='text-xl font-bold text-slate-900 dark:text-slate-100'>
                                {t('education.mitta')}
                            </h3>
                            <p className='text-sm text-slate-500 dark:text-slate-500 font-medium'>
                                {t('education.mitta-name')}
                            </p>
                        </div>
                        <div className='text-sm font-semibold text-slate-500 md:text-right pr-4'>
                            {t('education.mitta-year')}
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4 group px-2 pb-2 rounded-xl dark:border-slate-800 bg-white dark:bg-slate-900/30 shadow-lg transition-shadow duration-300 cursor-pointer font-[MighaBold] tracking-wider'>
                    <div className='flex-shrink-0 flex items-center justify-center'>
                        <img src={UniLogo} alt='logo-ucstgo'
                             className='w-16 md:w-20 md:h-20 object-contain mt-4'
                        />
                    </div>
                    <div className='flex md:flex-row justify-between w-full gap-2'>
                        <div className='space-y-1'>
                            <h3 className='text-xl font-bold text-slate-900 dark:text-slate-100'>
                                {t('education.uni')}
                            </h3>
                            <p className='text-sm text-slate-500 dark:text-slate-500 font-medium'>
                                {t('education.university')}
                            </p>
                        </div>
                        <div className='text-sm font-semibold text-slate-500 md:text-right pr-4'>
                            {t('education.educatedYear')}
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
};

export default Education;